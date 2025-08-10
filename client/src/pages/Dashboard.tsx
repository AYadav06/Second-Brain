
import { DashNavbar } from "@/components/Dash-Navbar";
import { NoteCard } from "@/components/NoteCard";
import { SideBar } from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddBrain } from "../components/AddBrain";

export const Dashboard = () => {
  return (
    <div className="bg">
      <DashNavbar />
      <div className="flex">
      <SideBar />
      <div className='h-screen w-screen'>
        <AddBrain/>
  
       <div className='grid grid-cols-3 gap-5 mt-5 ml-15'>

      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
      <NoteCard title="test" link="https" type="Notes" tags={["#test"]} />
       </div>
      </div>
      </div>
    </div>
  );
};
