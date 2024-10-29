/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReportGenerator from '../Componentes/ReportGenarator';
import { fetchProduction, fetchMedicalHistory } from '../services/api1';

const Reports = () => {
  const [production, setProduction] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);

  useEffect(() => {
    const loadReports = async () => {
      const productionData = await fetchProduction();
      const medicalHistoryData = await fetchMedicalHistory();
      setProduction(productionData);
      setMedicalHistory(medicalHistoryData);
    };
    loadReports();
  }, []);

  return (
    <div>
      <h2>Informes</h2>
      <ReportGenerator production={production} medicalHistory={medicalHistory} />
    </div>
  );
};

export default Reports;