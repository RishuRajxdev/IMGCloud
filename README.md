# IMGCloud

A high-performance full-stack application designed for secure image orchestration and cloud-based storage integration.

## 01. Overview

**IMGCloud** is a streamlined solution for managing digital assets. It bridges the gap between local file systems and cloud storage by leveraging **ImageKit** for delivery and **MongoDB** for persistent metadata management. The architecture is built on the MERN stack, prioritizing scalability and clean separation of concerns.

### Project Objectives
* **Automated Workflow:** Seamless transition from local file selection to cloud hosting.
* **Metadata Persistence:** Structured tracking of asset URLs and identifiers in MongoDB.
* **Security:** Secure server-side handling of ImageKit authentication and API keys.
* **Scalability:** Modular backend structure ready for enterprise-level feature expansion.

---

## 02. Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Cloud Provider** | ImageKit.io |
| **Configuration** | Dotenv, CORS |

---

## 03. System Architecture

The application implements a linear data flow to ensure security and data integrity:

1. **Client Layer:** React captures the file input and dispatches a multipart/form-data request.
2. **Logic Layer:** Node.js/Express processes the request and initiates a secure upload to ImageKit.
3. **Storage Layer:** ImageKit hosts the physical file and generates a CDN-optimized URL.
4. **Data Layer:** Mongoose stores the resulting URL and metadata for future retrieval.

---

## 04. Getting Started

### Prerequisites
* Node.js (v16.x or higher)
* MongoDB Atlas account or local instance
* ImageKit.io account

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/RishuRajxdev/IMGCloud.git](https://github.com/RishuRajxdev/IMGCloud.git)
   cd IMGCloud