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
Die Anwendung nutzt die Jakarta Persistence API (JPA) zur Datenbankanbindung. 
Verwendbar sind daher eigentlich alle relationalen Datenbanken mit JDBC-Treiber. 

| Datenbank         | Status            | Hinweise                                     |
|-------------------|-------------------|----------------------------------------------|
| Apache Derby      | 🧪 Entwickler     | Leichtgewichtig, nicht für hohe Last gedacht |
| PostgreSQL        | ✅ Empfohlen      | Stabil, leistungsfähig, Open Source          |
| MySQL / MariaDB   | ✅ Kompatibel     | Weit verbreitet, effizient                   |
| Oracle DB         | ⚠️ Möglich        | Lizenzpflichtig, JDBC-Treiber nötig          |
| MS SQL Server     | ⚠️ Möglich        | JDBC-Treiber separat einbinden               |

Als Entwicklungsdatenbank nutze ich persönlich gerade Apache Derby. Sie erfüllt meine derzeit meine Anforderungen in Bezug auf Entwicklung, Test und Eintelplatzbetrieb. 
Für einen ambitionierten Ansatz, bspw. im Mehrbenutzerbetrieb, mit vielen Datensätzen und auch parallelen Abfragen, sollte man wahrscheinlich eher eine der o.g. Alternativen in Betracht ziehen. 

## Screenshots 
- ![Alt-Text](Bild001.png)
- ![Alt-Text](Bild002.png)
- ![Alt-Text](Bildschirmfoto_68.png)
- ![Alt-Text](Bildschirmfoto_18.png)
- ![Alt-Text](Bild003.png)
- ![Alt-Text](Bildschirmfoto_20.png)
- ![Alt-Text](Bildschirmfoto_24.png)
- ![Alt-Text](Bildschirmfoto_50.png)
- ![Alt-Text](Bild08.png)
