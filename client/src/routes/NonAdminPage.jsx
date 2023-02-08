import React from 'react';
import ExamsTable from '../components/ExamsTable';

import { redirect } from "react-router-dom";

export default function NonAdminPage () {

    return (
        <div className = "NonAdminPage" >
            <ExamsTable />
        </div>
    );
}