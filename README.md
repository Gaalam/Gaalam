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

### 3. **License Management**
   - Manage software licenses by metrics (e.g., **Named User**, **Concurrent User**, **Installation**).
   - Track license usage and allocations across departments or individuals.
   - Monitor license validity and renewals.

<img src="Bild_002.png" width="800px" />
     
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

# Systemvoraussetzungen

## Minimale Anforderungen

- **Betriebssystem:** Windows 10+, macOS 11+, Linux (Ubuntu/Fedora o.ä.)
- **Java:** Java 17 kompatible JVM, wie z. B. Azul Zulu, OpenJDK, Oracle JDK, Amazon Corretto
- **Arbeitsspeicher:** mind. 4 GB
- **Speicherplatz:** ca. 300 MB + Datenbankdateien
- **Bildschirmauflösung:** 1280×800 oder höher
- **Unterstütze Datenbanksysteme:** PostgreSQL, MariaDB, MySQL, Derby (Embedded & Client)

## Empfohlene Konfiguration

- Java 17 oder neuer (64-Bit)
- 8 GB RAM oder mehr
- Internetverbindung (bei einer remote Datenbank und für Abfragen in der public LEI cloud database)

## Unterstützte Datenbanken

Die folgende Datenbankensystwe und Treiber sollten out-of-the box kompatibel sei. 

| Datenbank                     | Status            | Hinweise                                     |
|-------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Apache Derby - Embedded Mode  | 🧪 Fallback/Test  | Wenn keine passende Datenbankkonfiguration gefunden wird, nutzt die Software als Fallback eine File persistierende, embedded Derby Datenbank.               |
| Apache Derby - Client Mode    | 🧪 Entwickler     |                                                                                                                                                             |
| PostgreSQL                    | ✅ Empfohlen      |                                                                                                                                                             |
| MySQL / MariaDB               | ✅ Kompatibel     |                                                                                                                                                             |

## Konfiguration
In dieser Anwendung wird eine Datenbank verwendet. 
Die Datenbankkonfiguration befindet sich in der Datei `config.properties`, die parallel zum ausführenden JAR gespeichert ist.

Hier ein Beispiel für die Konfiguration:
### PostgreSQL Database Configuration  
db.type=postgresql  
db.driver=org.postgresql.Driver  
db.url=jdbc:postgresql://localhost:5432/mydatabase  
db.user=postgres  
db.password=secret  
db.schema=update

Hinweis: Sollte keine separate Datenbank verfügbar sein oder die Konfiguration scheitern, wechselt die Software beim Start automatisch in einen Embedded DB mode für bspw. Tests.
