import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";

import {
  collection,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";







const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  accepted: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  waitlisted: "bg-blue-100 text-blue-700",
};

export default function AdminDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      const q = query(
        collection(db, "application"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);
      setApplications(
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };

    fetchApps();
  }, []);

  const updateApplication = async (id, updates) => {
    await updateDoc(doc(db, "application", id), updates);

    setApplications(prev =>
      prev.map(app =>
        app.id === id ? { ...app, ...updates } : app
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">
        Admin – Applications Review
      </h1>

      <div className="space-y-6">
        {applications.map(app => (
          <div
            key={app.id}
            className="bg-white rounded-xl border p-6 shadow"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {app.fullName}
                </h2>
                <p className="text-gray-600">{app.email}</p>
                <p className="text-sm text-gray-500">
                  {app.school}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  statusColors[app.status || "pending"]
                }`}
              >
                {app.status || "pending"}
              </span>
            </div>

            {/* ESSAYS */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Leadership</h3>
                <p className="text-sm text-gray-700">
                  {app.leadershipEssay}
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Motivation</h3>
                <p className="text-sm text-gray-700">
                  {app.motivation}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {/* EXAM SCORE */}
              <input
                type="number"
                placeholder="Exam Score (%)"
                defaultValue={app.examScore || ""}
                className="border px-3 py-2 rounded"
                onBlur={(e) =>
                  updateApplication(app.id, {
                    examScore: Number(e.target.value),
                  })
                }
              />

              {/* INTERVIEW DATE */}
              <input
                type="datetime-local"
                className="border px-3 py-2 rounded"
                onBlur={(e) =>
                  updateApplication(app.id, {
                    interviewDate: new Date(e.target.value),
                  })
                }
              />

              {/* STATUS */}
              <select
                defaultValue={app.status || "pending"}
                className="border px-3 py-2 rounded"
                onChange={(e) =>
                  updateApplication(app.id, {
                    status: e.target.value,
                  })
                }
              >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="waitlisted">Waitlisted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* CV */}
            {app.cv && (
              <div className="mt-4">
                <a
                  href={app.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View CV
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
