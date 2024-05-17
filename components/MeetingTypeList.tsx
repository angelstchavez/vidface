"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaVideo,
  FaDoorOpen,
  FaCalendarAlt,
  FaRegFileVideo,
} from "react-icons/fa";
import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import Loader from "./Loader";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";
import { useToast } from "./ui/use-toast";
import { Input } from "./ui/input";

const initialValues = {
  dateTime: new Date(),
  description: "",
  link: "",
};

const MeetingTypeList: React.FC = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({ title: "Seleccione una fecha y hora" });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Error al crear reunión");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Reunión instantánea";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: "Reunión creada",
      });
    } catch (error) {
      console.error(error);
      toast({ title: "Error al crear reunión" });
    }
  };

  if (!client || !user) return <Loader />;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        bgColor="bg-vid-1-gradient"
        Icon={FaVideo}
        title="Nueva reunión"
        description="Iniciar una reunión instantánea"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        bgColor="bg-vid-2-gradient"
        Icon={FaDoorOpen}
        title="Unirse a una reunión"
        description="vía enlace de invitación"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeCard
        bgColor="bg-vid-3-gradient"
        Icon={FaCalendarAlt}
        title="Programar reunión"
        description="Planificar tu reunión"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        bgColor="bg-vid-4-gradient"
        Icon={FaRegFileVideo}
        title="Ver grabaciones"
        description="Acceder a las grabaciones anteriores"
        handleClick={() => router.push("/recordings")}
      />
      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Crear reunión"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setMeetingState(undefined)}
          title="Reunión creada"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Enlace copiado" });
          }}
          buttonIcon={FaVideo}
          className="text-center"
          buttonText="Copiar enlace de reunión"
        />
      )}

      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Escriba aquí el enlace"
        className="text-center"
        buttonText="Unirse a la reunión"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Enlace a la reunión"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Iniciar una reunión instantánea"
        className="text-center"
        buttonText="Iniciar reunión"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
