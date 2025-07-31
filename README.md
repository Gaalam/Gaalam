# IT Vendor and Contract Management Software

This software provides a comprehensive solution for managing IT vendors, contracts, and licenses. It helps organizations track their vendor relationships, evaluate compliance, and manage software licenses effectively.

## Features

### 1. **Vendor Management**
   - Manage IT vendors and their details (company, VAT number, country, contacts).
   - Visual representation of vendor relationships and key contacts.
   - Assign roles like **Vendor Manager**, **Compliance Officer**, and more.

<img src="Bild_001.png" width="800px" />
   
### 2. **Contract Management**
   - Track contracts, including **contract numbers**, **validity periods**, **auto-renewal settings**, and more.
   - Includes financial data like **contract price**, **license counts**, and **renewal conditions**.
   - Store and manage **contract clauses**, **risk assessments**, and **compliance notes**.

<img src="Bild_002.png" width="800px" />

### 3. **License Management**
   - Manage software licenses by metrics (e.g., **Named User**, **Concurrent User**, **Installation**).
   - Track license usage and allocations across departments or individuals.
   - Monitor license validity and renewals.

<img src="Bild_006.png" width="800px" />
     
### 4. **Compliance and Risk Management**
   - Evaluate vendors’ **regulatory compliance** against legal, industry, and corporate standards.
   - Assess vendor **risk levels** and **compliance health** with detailed ratings (e.g., **Low** to **High**).
   - Ensure your organization stays compliant with relevant laws (e.g., **GDPR**, **ISO** certifications).

### 5. **Graphical Visualization and Reporting**
   - Interactive visualizations of vendor networks, contracts, and key relationships.
   - Exportable reports on vendor evaluations, contract statuses, and license usage.

<img src="Bild_003.png" width="800px" />
   
### 6. **Evaluation and Scoring**
   - Evaluate vendors based on **Operational Value**, **Service Quality**, and **Strategic Alignment**.
   - Use detailed evaluation levels from **Very Low** to **Very High** to assess vendor performance and risk.
   - 
<img src="Bild001.png" width="800px" />

# System Requirements

## Minimum Requirements

- **Operating System:** Windows 10+, macOS 11+, Linux (Ubuntu/Fedora or similar)
- **Java:** JVM compatible with Java 17 (e.g., Azul Zulu, OpenJDK, Oracle JDK, Amazon Corretto)
- **RAM:** Minimum 4 GB
- **Storage:** Approximately 300 MB + database files
- **Display Resolution:** 1280×800 or higher
- **Supported Databases:** PostgreSQL, MariaDB, MySQL, Derby (Embedded & Client)

## Recommended Configuration

- Java 17 or newer (64-bit)
- 8 GB RAM or more
- Internet connection (for remote database access and public LEI cloud database queries)

## Supported Databases

The following database systems and drivers should be compatible out of the box:

| Database                     | Status                  | Notes                                        |
|------------------------------|-------------------------|----------------------------------------------|
| Apache Derby - Embedded Mode  | 🧪Fallback/Test  | If no valid database configuration is found, the software will use an embedded Derby database as a fallback for file persistence (typically for testing). |
| Apache Derby - Client Mode    | 🧪Developer        |                                              |
| PostgreSQL                    | ✅Compatible       |                                              |
| MySQL                         | ✅Compatible       |                                              |
| MariaDB                       | ✅Compatible       |                                              |

## Configuration

This application uses a database for data storage.  
The database configuration is located in the `config.properties` file, which should be stored alongside the executable JAR.

Example configuration for PostgreSQL:

```properties
# PostgreSQL Database Configuration  
db.type=postgresql  
db.driver=org.postgresql.Driver  
db.url=jdbc:postgresql://localhost:5432/mydatabase  
db.user=postgres  
db.password=secret  
db.schema=update

