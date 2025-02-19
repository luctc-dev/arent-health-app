import React from "react";
import { BODY_RECORD_ID } from "@/constants";
import SectionHeader from "@/components/atoms/section-header";
import BodyWeightChart from "../body-weight-chart";

const BodyRecordSection = () => {
  return (
    <div id={BODY_RECORD_ID} className="mt-14 px-6 py-4 bg-dark-500">
      <SectionHeader
        title={
          <>
            BODY
            <br />
            RECORD
          </>
        }
        dateStr="2021.05.21"
      />
      <BodyWeightChart bgColor="bg-dark-500" />
    </div>
  );
};

export default BodyRecordSection;
