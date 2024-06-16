/*import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/atoms/header";
import Row from "../components/atoms/row";
import styles from "./desktop4.module.css";

const Desktop4: NextPage = () => {
  const router = useRouter();

  const onIconParkOutlinelogoutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.manageAttendance}>
      <img
        className={styles.manageAttendanceChild}
        alt=""
        src="/rectangle-1.svg"
      />
      <div className={styles.manageAttendanceItem} />
      <img
        className={styles.phstudentBoldIcon}
        alt=""
        src="/phstudentbold3.svg"
      />
      <img
        className={styles.iconParkOutlinelogout}
        alt=""
        src="/iconparkoutlinelogout3.svg"
        onClick={onIconParkOutlinelogoutClick}
      />
      <img
        className={styles.lucidefileSpreadsheetIcon}
        alt=""
        src="/lucidefilespreadsheet3.svg"
      />
      <Header
        dASHBOARD="KAJUR"
        messageSquareIconTop="1.5px"
        messageSquareIconLeft="-66px"
        messageSquareIconDisplay="flex"
        messageSquareIconWidth="186px"
        messageSquareIconHeight="35px"
      />
      <img
        className={styles.polinemaLogo1Icon}
        alt=""
        src="/polinemalogo-11@2x.png"
      />
      <img
        className={styles.polinemaLogo2Icon}
        alt=""
        src="/polinemalogo-2@2x.png"
      />
      <div className={styles.rowParent}>
        <Row
          showCell
          rowWidth="1138px"
          rowBackgroundColor="unset"
          rowPosition="absolute"
          rowTop="34px"
          rowLeft="0px"
          rowBorderRadius="var(--br-mini) var(--br-mini) 0px 0px"
          rowBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          rowBorder="1px solid var(--color-black)"
          rowHeight="76px"
          cellBackgroundColor="rgba(0, 0, 0, 0.4)"
          cellBorderTop="1px solid var(--color-black)"
          cellBorderLeft="1px solid var(--color-black)"
          cellMixBlendMode="normal"
          textFontSize="30px"
          textFontWeight="bold"
          textFontFamily="'Inknut Antiqua'"
          textTextAlign="center"
          cellWidth="unset"
          cellBackgroundColor1="rgba(0, 0, 0, 0.4)"
          cellBorderTop1="1px solid var(--color-black)"
          cellBorderLeft1="1px solid var(--color-black)"
          contentAlignSelf="unset"
          contentOverflow="unset"
          contentWidth="135px"
          textFontSize1="30px"
          textFontWeight1="bold"
          textFontFamily1="'Inknut Antiqua'"
          textTextAlign1="center"
          cellBackgroundColor2="rgba(0, 0, 0, 0.4)"
          cellBorderTop2="1px solid var(--color-black)"
          cellBorderLeft2="1px solid var(--color-black)"
          textFontSize2="30px"
          textFontWeight2="bold"
          textFontFamily2="'Inknut Antiqua'"
          textTextAlign2="center"
        />
        <Row
          showCell
          rowWidth="1138px"
          rowBackgroundColor="#f190e2"
          rowPosition="absolute"
          rowTop="100px"
          rowLeft="0px"
          rowBorderRadius="unset"
          rowBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          rowBorder="1px solid var(--color-black)"
          rowHeight="76px"
          cellBackgroundColor="rgba(255, 255, 255, 0.5)"
          cellBorderTop="1px solid var(--color-black)"
          cellBorderLeft="1px solid var(--color-black)"
          cellMixBlendMode="unset"
          textFontSize="12px"
          textFontWeight="unset"
          textFontFamily="Inter"
          textTextAlign="left"
          cellWidth="135px"
          cellBackgroundColor1="rgba(255, 255, 255, 0.5)"
          cellBorderTop1="1px solid var(--color-black)"
          cellBorderLeft1="1px solid var(--color-black)"
          contentAlignSelf="stretch"
          contentOverflow="hidden"
          contentWidth="unset"
          textFontSize1="12px"
          textFontWeight1="unset"
          textFontFamily1="Inter"
          textTextAlign1="left"
          cellBackgroundColor2="rgba(255, 255, 255, 0.5)"
          cellBorderTop2="1px solid var(--color-black)"
          cellBorderLeft2="1px solid var(--color-black)"
          textFontSize2="12px"
          textFontWeight2="unset"
          textFontFamily2="Inter"
          textTextAlign2="left"
        />
        <Row
          showCell
          rowWidth="1138px"
          rowBackgroundColor="#f190e2"
          rowPosition="absolute"
          rowTop="176px"
          rowLeft="0px"
          rowBorderRadius="unset"
          rowBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          rowBorder="1px solid var(--color-black)"
          rowHeight="77px"
          cellBackgroundColor="rgba(255, 255, 255, 0.5)"
          cellBorderTop="1px solid var(--color-black)"
          cellBorderLeft="1px solid var(--color-black)"
          cellMixBlendMode="unset"
          textFontSize="12px"
          textFontWeight="unset"
          textFontFamily="Inter"
          textTextAlign="left"
          cellWidth="135px"
          cellBackgroundColor1="rgba(255, 255, 255, 0.5)"
          cellBorderTop1="1px solid var(--color-black)"
          cellBorderLeft1="1px solid var(--color-black)"
          contentAlignSelf="stretch"
          contentOverflow="hidden"
          contentWidth="unset"
          textFontSize1="12px"
          textFontWeight1="unset"
          textFontFamily1="Inter"
          textTextAlign1="left"
          cellBackgroundColor2="rgba(255, 255, 255, 0.5)"
          cellBorderTop2="1px solid var(--color-black)"
          cellBorderLeft2="1px solid var(--color-black)"
          textFontSize2="12px"
          textFontWeight2="unset"
          textFontFamily2="Inter"
          textTextAlign2="left"
        />
        <Row
          showCell
          rowWidth="1138px"
          rowBackgroundColor="#f08fe1"
          rowPosition="absolute"
          rowTop="253px"
          rowLeft="0px"
          rowBorderRadius="unset"
          rowBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          rowBorder="1px solid var(--color-black)"
          rowHeight="76px"
          cellBackgroundColor="rgba(255, 255, 255, 0.5)"
          cellBorderTop="1px solid var(--color-black)"
          cellBorderLeft="1px solid var(--color-black)"
          cellMixBlendMode="unset"
          textFontSize="12px"
          textFontWeight="unset"
          textFontFamily="Inter"
          textTextAlign="left"
          cellWidth="135px"
          cellBackgroundColor1="rgba(255, 255, 255, 0.5)"
          cellBorderTop1="1px solid var(--color-black)"
          cellBorderLeft1="1px solid var(--color-black)"
          contentAlignSelf="stretch"
          contentOverflow="hidden"
          contentWidth="unset"
          textFontSize1="12px"
          textFontWeight1="unset"
          textFontFamily1="Inter"
          textTextAlign1="left"
          cellBackgroundColor2="rgba(255, 255, 255, 0.5)"
          cellBorderTop2="1px solid var(--color-black)"
          cellBorderLeft2="1px solid var(--color-black)"
          textFontSize2="12px"
          textFontWeight2="unset"
          textFontFamily2="Inter"
          textTextAlign2="left"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.printHere}>Print Here</b>
        <img className={styles.iconPrint} alt="" src="/-icon-print.svg" />
      </div>
    </div>
  );
};

export default Desktop4;*/

// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

type AttendanceData = {
  timestamp: { value: string };
  scannerId: string;
  scanTime: { value: string };
  macAddress: string;
};

const HomePage = () => {
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/attendance');
      setAttendanceData(response.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  const addAttendanceData = async () => {
    // Implement add data logic
  };

  const updateAttendanceData = async (id: string) => {
    // Implement update data logic
  };

  const deleteAttendanceData = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.delete(`/api/attendance/${id}`);
      fetchAttendanceData(); // Refresh the data
    } catch (err) {
      setError('Error deleting data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">BigQuery Data Interaction</h1>
      <div className="flex mb-4">
        <button onClick={fetchAttendanceData} className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Fetch Attendance Data</button>
        <button onClick={addAttendanceData} className="bg-green-500 text-white py-2 px-4 rounded mr-2">Post Attendance Data</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Timestamp</th>
              <th className="border border-gray-300 px-4 py-2">Scanner ID</th>
              <th className="border border-gray-300 px-4 py-2">Scan Time</th>
              <th className="border border-gray-300 px-4 py-2">MAC Address</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{data.timestamp?.value}</td>
                <td className="border border-gray-300 px-4 py-2">{data.scannerId}</td>
                <td className="border border-gray-300 px-4 py-2">{data.scanTime?.value}</td>
                <td className="border border-gray-300 px-4 py-2">{data.macAddress}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={() => updateAttendanceData(data.macAddress)} className="bg-yellow-500 text-white py-1 px-2 rounded mr-2">Edit</button>
                  <button onClick={() => deleteAttendanceData(data.macAddress)} className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomePage;
