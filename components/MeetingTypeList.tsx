"use client";

import { useState } from "react";
import {
  FaVideo,
  FaDoorOpen,
  FaCalendarAlt,
  FaRegFileVideo,
} from "react-icons/fa";
import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import router from "next/router";

const MeetingTypeList: React.FC = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  const handleScheduleMeetingClick = () => {
    setMeetingState("isScheduleMeeting");
  };

  const handleJoinMeetingClick = () => {
    setMeetingState("isJoiningMeeting");
  };

  const handleInstantMeetingClick = () => {
    setMeetingState("isInstantMeeting");
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        bgColor="bg-vid-1-gradient"
        Icon={FaVideo}
        title="Nueva reunión"
        description="Iniciar una reunión instantánea"
        handleClick={handleInstantMeetingClick}
      />
      <HomeCard
        bgColor="bg-vid-2-gradient"
        Icon={FaDoorOpen}
        title="Unirse a una reunión"
        description="vía enlace de invitación"
        handleClick={handleJoinMeetingClick}
      />
      <HomeCard
        bgColor="bg-vid-3-gradient"
        Icon={FaCalendarAlt}
        title="Programar reunión"
        description="Planificar tu reunión"
        handleClick={handleScheduleMeetingClick}
      />
      <HomeCard
        bgColor="bg-vid-4-gradient"
        Icon={FaRegFileVideo}
        title="Ver grabaciones"
        description="Acceder a las grabaciones anteriores"
        handleClick={() => router.push("/recordings")}
      />
      <MeetingModal
        buttonIcon={FaVideo}
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title={"Nueva reunión"}
      ></MeetingModal>
    </section>
  );
};

export default MeetingTypeList;
