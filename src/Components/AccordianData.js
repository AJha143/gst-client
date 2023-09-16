import TableB2B from "../Pages/GSTR/GSTR1/Summary/Table/TableB2B";
import TableB2C from "../Pages/GSTR/GSTR1/Summary/Table/TableB2C";
import TableAdvanceHSN from "../Pages/GSTR/GSTR1/Summary/Table/TableAdvanceHSN";
import TableB2COthers from "../Pages/GSTR/GSTR1/Summary/Table/TableB2Cothers";
import TableExportInvoice from "../Pages/GSTR/GSTR1/Summary/Table/TableExportInvoice";
import TableNIL from "../Pages/GSTR/GSTR1/Summary/Table/TableNIL";
import TableDocumentIssue from "../Pages/GSTR/GSTR1/Summary/Table/TableDocumentIssue";
export const summaryData = [
    {
      id: 1,
      title: "B2B and Credit Debit Note (Registered) Section Summary",
      content: <TableB2B />,
    },
    {
      id: 2,
      title: "B2C Large and Credit Debit Note (Unregistered) Section Summary",
      content: <TableB2C />,
    },
    {
      id: 3,
      title:
        "Advances Received (Tax Liability), Adjustment of Advances and HSN Section Summary",
      content: <TableAdvanceHSN />,
    },
    { id: 4, title: "B2C Others - Section Summary", content: <TableB2COthers/> },
    { id: 5, title: "Export Invoices Section Summary", content: <TableExportInvoice/> },
    { id: 6, title: "NIL Section Summary", content: <TableNIL/> },
    { id: 7, title: "Documents Issued Section Summary", content: <TableDocumentIssue /> },
  ];