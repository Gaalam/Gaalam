# Systemvoraussetzungen

## Minimale Anforderungen

- **Betriebssystem:** Windows 10+, macOS 11+, Linux (Ubuntu/Fedora o.ä.)
- **Java:** Java 17 (z. B. OpenJDK, Oracle JDK, Amazon Corretto)
- **Arbeitsspeicher:** mind. 4 GB
- **Speicherplatz:** ca. 300 MB + Datenbankdateien
- **Bildschirmauflösung:** 1280×800 oder höher

## Empfohlene Konfiguration

- Java 17 oder neuer (64-Bit)
- 8 GB RAM oder mehr
- Internetverbindung (bei einer remote Datenbank und für Abfragen in der public LEI cloud database)

## Unterstützte Datenbanken

Out-of-the box, werden folgende Datenbanken unterstützt: 

| Datenbank                     | Status            | Hinweise                                     |
|-------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Apache Derby - Embedded Mode  | 🧪 Fallback/Test  | Wenn keine passende Datenbankkonfiguration gefunden wird, nutzt die Software als Fallback eine File persistierende, embedded Derby Datenbank.               |
| Apache Derby - Client Mode    | 🧪 Entwickler     |                                                                                                                                                             |
| PostgreSQL                    | ✅ Empfohlen      |                                                                                                                                                             |
| MySQL / MariaDB               | ✅ Kompatibel     |                                                                                                                                                             |

## Konfiguration

---------------------------------------------------------
 🟣 PostgreSQL (Example)
---------------------------------------------------------
 db.type=postgresql
 db.driver=org.postgresql.Driver
 db.url=jdbc:postgresql://localhost:5432/mydatabase
 db.user=postgres
 db.password=secret
 db.schema=update

## Screenshots 
--
