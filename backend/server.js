const express = require("express");
const cors = require("cors");
const XLSX = require("xlsx");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Main website folder
const websiteFolder = path.join(__dirname, "..");

// Excel file
const excelFile = path.join(__dirname, "orders.xlsx");

// Excel columns
const columns = [
    "Order ID",
    "Date & Time",
    "Customer Name",
    "Mobile",
    "Email",
    "Address",
    "City",
    "State",
    "PIN Code",
    "Products",
    "Subtotal",
    "Delivery",
    "Total",
    "Payment Method",
    "Order Status"
];

// Create Excel file if it doesn't exist
function createExcelFile() {
    if (!fs.existsSync(excelFile)) {
        const workbook = XLSX.utils.book_new();

        const worksheet = XLSX.utils.aoa_to_sheet([
            columns
        ]);

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Orders"
        );

        XLSX.writeFile(workbook, excelFile);

        console.log("orders.xlsx created successfully.");
    }
}

createExcelFile();

// Serve the main Kaanch Kraft website
app.use(express.static(websiteFolder));

// Server health check
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Kaanch Kraft Order Server is running."
    });
});

// Save order to Excel
app.post("/api/orders", (req, res) => {
    try {
        const order = req.body;

        if (!order.customerName || !order.mobile) {
            return res.status(400).json({
                success: false,
                message: "Customer name and mobile are required."
            });
        }

        const workbook = XLSX.readFile(excelFile);
        const worksheet = workbook.Sheets["Orders"];

        const existingRows =
            XLSX.utils.sheet_to_json(worksheet);

        const orderId = "KK-" + Date.now();

        const newOrder = {
            "Order ID": orderId,
            "Date & Time": new Date().toLocaleString("en-IN"),
            "Customer Name": order.customerName,
            "Mobile": order.mobile,
            "Email": order.email || "",
            "Address": order.address || "",
            "City": order.city || "",
            "State": order.state || "",
            "PIN Code": order.pin || "",
            "Products": JSON.stringify(order.items || []),
            "Subtotal": order.subtotal || 0,
            "Delivery": order.delivery || 0,
            "Total": order.total || 0,
            "Payment Method":
                order.paymentMethod || "Not Selected",
            "Order Status": "New"
        };

        existingRows.push(newOrder);

        const newWorksheet =
            XLSX.utils.json_to_sheet(existingRows, {
                header: columns
            });

        workbook.Sheets["Orders"] = newWorksheet;

        XLSX.writeFile(workbook, excelFile);

        console.log(
            `Order ${orderId} saved to Excel.`
        );

        res.json({
            success: true,
            message: "Order saved successfully.",
            orderId: orderId
        });

    } catch (error) {
        console.error("Order save error:", error);

        res.status(500).json({
            success: false,
            message: "Could not save order."
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(
        `Kaanch Kraft server running at http://localhost:${PORT}`
    );
});