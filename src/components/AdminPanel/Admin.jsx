import React from 'react';
import { Accordion, Placeholder } from 'rsuite';
import Contacts from "../../pages/Contacts";

const Admin = () => {
    return (
        <div className="admin__panel">
            <Accordion bordered >
                <Accordion.Panel header="Users">
                    <Contacts/>
                </Accordion.Panel>
                <Accordion.Panel header="Transactions">
                    <Placeholder.Paragraph />
                </Accordion.Panel>
                <Accordion.Panel header="Deposits">
                    <Placeholder.Paragraph />
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Admin;