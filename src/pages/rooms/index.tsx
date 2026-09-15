import Layout from "@/src/app/layout";
import RoomCard from "@/src/component/room/RoomCard";
import rooms from "@/src/data/rooms.json";

export default function RoomsPage() {
    return (
        <Layout>
            <div className="space-y-4 p-4">
                {rooms.map((room: any) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </Layout>
    )
}