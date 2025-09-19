type TabType = "profile" | "password";

interface ProfileTabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function ProfileTabs({
  activeTab,
  setActiveTab,
}: ProfileTabsProps) {
  return (
    <div className="flex gap-4 mb-8 border-b border-gray-200">
      <button
        className={`pb-3 px-2 font-semibold transition-colors border-b-2 ${
          activeTab === "profile"
            ? "border-[#7EB693] text-[#274C5B]"
            : "border-transparent text-gray-500 hover:text-[#274C5B]"
        }
        `}
        onClick={() => setActiveTab("profile")}
      >
        Profile Information
      </button>
      <button
        className={`pb-3 px-2 font-semibold transition-colors border-b-2 ${
          activeTab === "password"
            ? "border-[#7EB693] text-[#274C5B]"
            : "border-transparent text-gray-500 hover:text-[#274C5B]"
        }
        `}
        onClick={() => setActiveTab("password")}
      >
        Change Password
      </button>
    </div>
  );
}
