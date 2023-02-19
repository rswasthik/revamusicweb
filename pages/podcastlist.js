import React from "react";
import { useEffect, useState } from "react";
import { database } from "@/firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function TableRow({ rjName, track, dop, onRemove = () => {} }) {
  return (
    <tr className="border">
      <td className="p-3">{track}</td>
      <td className="p-3">{rjName}</td>
      <td className="p-3">{dop}</td>
      <td className="p-3">
        <button
          onClick={onRemove}
          className="border hover:bg-slate-300 p-3 text-red-500"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

function podcastlist() {
  const dbInstance = collection(database, "Podcast");

  const [podcasts, setPodcasts] = useState();

  useEffect(() => {
    getDocs(dbInstance).then((docSnap) =>
      setPodcasts(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);

  return (
    <>
      <table className="w-full p-5">
        <colgroup>
          <col span={1} className="w-[40%]" />
          <col span={1} className="w-[20%]" />
          <col span={1} className="w-[25%]" />
          <col span={1} className="w-[15%]" />
        </colgroup>
        <tbody>
          <tr className="bg-gray-300">
            <td className="p-3 font-bold">TitleTrack</td>
            <td className="p-3 font-bold">RJ Name</td>
            <td className="p-3 font-bold">Date Of Upload</td>
            <td className="p-3 font-bold">Remove</td>
          </tr>
          {podcasts?.map((key, i) => (
            <TableRow
              key={i}
              rjName={key.rjName}
              track={key.titleTrack}
              dop={key.dop}
              onRemove={() => {
                deleteDoc(doc(database, "Podcast", key.id)).then(() => {
                  getDocs(dbInstance).then((docSnap) =>
                    setPodcasts(
                      docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                    )
                  );
                });
              }}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default podcastlist;
