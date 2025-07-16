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

```properties
# PostgreSQL Database Configuration  
db.type=postgresql  
db.driver=org.postgresql.Driver  
db.url=jdbc:postgresql://localhost:5432/mydatabase  
db.user=postgres  
db.password=secret  
db.schema=update

Hinweis: Sollte keine separate Datenbank verfügbar sein oder die Konfiguration scheitern, wechselt die Software beim Start automatisch in einen Embedded DB mode für bspw. Tests.

## Screenshots 
![Bild001](Bild001.png)
![Bild_001](Bild_001.png)
![Bild_002](Bild_002.png)
![Bild_003](Bild_003.png)
![Bildschirmfoto_50](Bildschirmfoto_50.png)

