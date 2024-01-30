import { Logout } from "./clientforms";

export default function SignoutButton() {
  return (
    <div>
      <button
        className="p-3 hover:bg-green-400"
        onClick={() => {
          const res = Logout();
          if (res.status === 200) {
            window.location.href = "/login";
          } else {
            window.location.reload();
          }
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
