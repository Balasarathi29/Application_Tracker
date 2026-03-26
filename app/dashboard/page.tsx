import KanbanBoard from "@/components/kanbanBoard";
import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";
import { initializeUserBoard } from "@/lib/init-user-board";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/sign-in");
  }
  await connectDB();
  let board = await Board.findOne({
    userId: session.user.id,
    name: "Job Hunt",
  }).populate({
    path: "columns",
    populate: { path: "jobApplications" },
  });

  // Auto-create a default board with columns if missing
  if (!board) {
    const created = await initializeUserBoard(session.user.id);
    board = await Board.findById(created._id).populate({
      path: "columns",
      populate: { path: "jobApplications" },
    });
  }

  // Avoid passing Mongoose docs to the client component
  const boardData = board ? JSON.parse(JSON.stringify(board)) : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">Job Hunt</h1>
          <p className="text-gray-600">Track your job applications</p>
        </div>
        <KanbanBoard board={boardData} userId={session.user.id} />
      </div>
    </div>
  );
}
