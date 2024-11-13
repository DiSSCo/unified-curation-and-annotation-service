/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Contains all information about a particular Event, which is an activity at a moment in time, at a specific location made by an agent
 */
export interface Event {
  /**
   * The identifier for the Event object.
   */
  "@id"?: string;
  /**
   * The type of the digital object, in this case ods:Event
   */
  "@type": "ods:Event";
  /**
   * The behavior shown by the subject at the time the event was recorded
   */
  "dwc:behavior"?: string;
  /**
   * The nature of the ods:Event. There can always be only one collecting event
   */
  "dwc:eventType"?: string;
  /**
   * The sex of the biological individual(s) represented in the dwc:Event
   */
  "dwc:sex"?: string;
  /**
   * The age class or life stage at the time the ods:Event was recorded
   */
  "dwc:lifeStage"?: string;
  /**
   * The reproductive condition of the biological individual(s) represented in the ods:Event.
   */
  "dwc:reproductiveCondition"?: string;
  /**
   * Categorisation of individuals for eusocial species (including some mammals and arthropods)
   */
  "dwc:caste"?: string;
  /**
   * An indication of whether the specimen was alive or dead at the time of collection or observation
   */
  "dwc:vitality"?: string;
  /**
   * Statement about whether a organism has been introduced to a given place and time through the direct or indirect activity of modern humans
   */
  "dwc:establishmentMeans"?: string;
  /**
   * The process by which an organism came to be in a given place at a given time
   */
  "dwc:pathway"?: string;
  /**
   * The degree to which an organism survives, reproduces, and expands its range at the given place and time
   */
  "dwc:degreeOfEstablishment"?: string;
  /**
   * A categorical description of the extent to which the georeference has been verified to represent the best possible spatial description for the ods:Location of the ods:Event
   */
  "dwc:georeferenceVerificationStatus"?: string;
  /**
   * An identifier given to the ods:Event in the field. Often serves as a link between field notes and the ods:Event
   */
  "dwc:fieldNumber"?: string;
  /**
   * The date-time or interval during which a ods:Event occurred. For occurrences, this is the date-time when the ods:Event was recorded. Not suitable for a time in a geological context
   */
  "dwc:eventDate"?: string;
  /**
   * The time or interval during which a ods:Event occurred
   */
  "dwc:eventTime"?: string;
  /**
   * The latest integer day of the year on which the ods:Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366)
   */
  "dwc:endDayOfYear"?: number;
  /**
   * The earliest integer day of the year on which the ods:Event occurred (1 for January 1, 365 for December 31, except in a leap year, in which case it is 366)
   */
  "dwc:startDayOfYear"?: number;
  /**
   * The verbatim original representation of the date and time information for a ods:Event
   */
  "dwc:verbatimEventDate"?: string;
  /**
   * The four-digit year in which the ods:Event occurred, according to the Common Era Calendar
   */
  "dwc:year"?: number;
  /**
   * The integer month in which the ods:Event occurred
   */
  "dwc:month"?: number;
  /**
   * The integer day of the month on which the ods:Event occurred
   */
  "dwc:day"?: number;
  /**
   * A category or description of the habitat in which the ods:Event occurred
   */
  "dwc:habitat"?: string;
  /**
   * A detailed description of the methods used during the ods:Event
   */
  "eco:protocolDescriptions"?: string;
  /**
   * A numeric value for a measurement of the size (time duration, length, area, or volume) of a sample in a sampling ods:Event
   */
  "dwc:sampleSizeValue"?: number;
  /**
   * The unit of measurement of the size (time duration, length, area, or volume) of a sample in a sampling ods:Event
   */
  "dwc:sampleSizeUnit"?: string;
  /**
   * The names of, references to, or descriptions of the methods or protocols used during a ods:Event
   */
  "dwc:samplingProtocol"?: string;
  /**
   * The amount of effort expended during a ods:Event
   */
  "dwc:samplingEffort"?: string;
  /**
   * One of a) an indicator of the existence of, b) a reference to (publication, URI), or c) the text of notes taken in the field about the ods:Event
   */
  "dwc:fieldNotes"?: string;
  /**
   * Comments or notes about the ods:Event
   */
  "dwc:eventRemarks"?: string;
  /**
   * Contains additional information about the ods:Event in the form of assertions
   */
  "ods:hasAssertions"?: Assertion[];
  /**
   * Contains all agents that are connected to the specific event
   */
  "ods:hasAgents"?: Agent2[];
  "ods:hasLocation"?: Location;
}
export interface Assertion {
  /**
   * Identical to the `dwc:measurementID`. An identifier for the dwc:MeasurementOrFact (information pertaining to measurements, facts, characteristics, or assertions). May be a global unique identifier or an identifier specific to the data set
   */
  "@id"?: string;
  /**
   * The type of the digital object, in this case a ods:Assertion
   */
  "@type": "ods:Assertion";
  /**
   * An identifier for the dwc:MeasurementOrFact (information pertaining to measurements, facts, characteristics, or assertions). May be a global unique identifier or an identifier specific to the data set
   */
  "dwc:measurementID"?: string;
  /**
   * An identifier for a broader dwc:MeasurementOrFact that groups this and potentially other ods:Assertions
   */
  "dwc:parentMeasurementID"?: string;
  /**
   * The nature of the assertion
   */
  "dwc:measurementType"?: string;
  /**
   * The nature of the assertion
   */
  "dwciri:measurementType"?: string;
  /**
   * The date on which the dwc:MeasurementOrFact was made
   */
  "dwc:measurementDeterminedDate"?: string;
  /**
   * The value of the assertion
   */
  "dwc:measurementValue"?: string;
  /**
   * The value of the assertion
   */
  "dwciri:measurementValue"?: string;
  /**
   * The description of the potential error associated with the dwc:measurementValue
   */
  "dwc:measurementAccuracy"?: string;
  /**
   * The units associated with the dwc:measurementValue
   */
  "dwc:measurementUnit"?: string;
  /**
   * The units associated with the dwc:measurementValue
   */
  "dwciri:measurementUnit"?: string;
  /**
   * A description of or reference to (publication, URI) the method or protocol used to determine the measurement, fact, characteristic, or assertion
   */
  "dwc:measurementMethod"?: string;
  /**
   * A description of or reference to (publication, URI) the method or protocol used to determine the measurement, fact, characteristic, or assertion
   */
  "dwciri:measurementMethod"?: string;
  /**
   * Comments or notes accompanying the dwc:MeasurementOrFact
   */
  "dwc:measurementRemarks"?: string;
  /**
   * The agent(s) who made the assertion, contains an ods:Agent object
   */
  "ods:hasAgents"?: Agent[];
  /**
   * Contains the publication citation(s) that support the assertion
   */
  "ods:hasCitations"?: Citation[];
}
export interface Agent {
  /**
   * The identifier for the Agent object
   */
  "@id"?: string;
  /**
   * The type of the agent, the prov ontology is only used in the prov-o ods:CreateUpdateTombstoneEvent
   */
  "@type":
    | "schema:Person"
    | "schema:Organization"
    | "schema:SoftwareApplication"
    | "prov:Person"
    | "prov:SoftwareAgent";
  /**
   * The primary unique identifier of the Agent object. All identifiers will also be added to the ods:hasIdentifiers array
   */
  "schema:identifier"?: string;
  /**
   * Full name of the agent
   */
  "schema:name"?: string;
  /**
   * Contains all roles associated with the agent in the context of the Digital Object. Should always contain at least one role
   *
   * @minItems 1
   */
  "ods:hasRoles"?: [
    {
      /**
       * The identifier for the agent role, preferably a URL to a controlled vocabulary
       */
      "@id"?: string;
      /**
       * The type of the object, in this case schema:Role
       */
      "@type": "schema:Role";
      /**
       * The category that best matches the nature of a role of an Agent
       */
      "schema:roleName": string;
      /**
       * Date the agent began the role
       */
      "schema:startDate"?: string;
      /**
       * Date the agent ended the role
       */
      "schema:endDate"?: string;
      /**
       * Can be used to indicate the order of importance when there are multiple agents with the same role. Lower order means higher importance.
       */
      "schema:position"?: number;
    },
    ...{
      /**
       * The identifier for the agent role, preferably a URL to a controlled vocabulary
       */
      "@id"?: string;
      /**
       * The type of the object, in this case schema:Role
       */
      "@type": "schema:Role";
      /**
       * The category that best matches the nature of a role of an Agent
       */
      "schema:roleName": string;
      /**
       * Date the agent began the role
       */
      "schema:startDate"?: string;
      /**
       * Date the agent ended the role
       */
      "schema:endDate"?: string;
      /**
       * Can be used to indicate the order of importance when there are multiple agents with the same role. Lower order means higher importance.
       */
      "schema:position"?: number;
    }[]
  ];
  /**
   * Email of the agent
   */
  "schema:email"?: string;
  /**
   * URL to a website of the agent
   */
  "schema:url"?: string;
  /**
   * Contains all identifiers associated with the agent
   */
  "ods:hasIdentifiers"?: Identifier[];
}
/**
 * Object used to describe identifiers of a Digital Object, based on https://rs.gbif.org/extension/gbif/1.0/identifier.xml but includes ods specific terms
 */
export interface Identifier {
  /**
   * The identifier for the Identifier object.
   */
  "@id"?: string;
  /**
   * The type of the digital object, in this case a ods:Identifier
   */
  "@type": "ods:Identifier";
  /**
   * A name for the identifier
   */
  "dcterms:title": string;
  /**
   * The type of the value in the `dcterms:identifier` field
   */
  "dcterms:type"?:
    | "ARK"
    | "arXiv"
    | "bibcode"
    | "DOI"
    | "EAN13"
    | "EISSN"
    | "Handle"
    | "IGSN"
    | "ISBN"
    | "ISSN"
    | "ISTC"
    | "LISSN"
    | "LSID"
    | "PMID"
    | "PURL"
    | "UPC"
    | "URL"
    | "URN"
    | "w3id"
    | "UUID"
    | "Other"
    | "Locally unique identifier";
  /**
   * The value for the identifier
   */
  "dcterms:identifier": string;
  /**
   * All possible mime types of content that can be returned by identifier in case the identifier is resolvable. Plain UUIDs for example do not have a dc:format return type, as they are not resolvable on their own. For a list of MIME types see the list maintained by IANA: http://www.iana.org/assignments/media-types/index.html, in particular the text http://www.iana.org/assignments/media-types/text/ and application http://www.iana.org/assignments/media-types/application/ types. Frequently used values are text/html, text/xml, application/rdf+xml, application/json
   */
  "dcterms:format"?: string[];
  /**
   * Additional keywords that the publisher may prefer to be attached to the identifier
   */
  "dcterms:subject"?: string[];
  /**
   * Indicates whether the identifier is part of the physical label
   */
  "ods:isPartOfLabel"?: boolean;
  /**
   * Indicates whether the identifier is a persistent identifier
   */
  "ods:gupriLevel"?:
    | "LocallyUniqueStable"
    | "GloballyUniqueStable"
    | "GloballyUniqueStableResolvable"
    | "GloballyUniqueStablePersistentResolvable"
    | "GloballyUniqueStablePersistentResolvableFDOCompliant";
  /**
   * Indicates the status of the identifier
   */
  "ods:identifierStatus"?: "Preferred" | "Alternative" | "Superseded";
}
/**
 * Based on https://rs.gbif.org/extension/gbif/1.0/references.xml but includes ods specific terms
 */
export interface Citation {
  /**
   * The main identifier of the citation, preferably a DOI, ISBN, URI, etc referring to the reference
   */
  "@id"?: string;
  /**
   * The type of the digital object, in this case a ods:Citation
   */
  "@type": "ods:Citation";
  /**
   * The main identifier of the citation, preferably a DOI, ISBN, URI, etc referring to the reference
   */
  "dcterms:identifier"?: string;
  /**
   * The category that best matches the nature of a reference
   */
  "dcterms:type"?: string;
  /**
   * Date of publication
   */
  "dcterms:date"?: string;
  /**
   * Title of publication
   */
  "dcterms:title"?: string;
  /**
   * Page number of the citation
   */
  "ods:pageNumber"?: string;
  /**
   * Abstracts, remarks, notes
   */
  "dcterms:description"?: string;
  /**
   * A bibliographic reference for the resource
   */
  "dcterms:bibliographicCitation": string;
  /**
   * Is the citation peer reviewed?
   */
  "ods:isPeerReviewed"?: boolean;
  /**
   * The agent(s) who made the publication, contains an ods:Agent object
   */
  "ods:hasAgents"?: Agent1[];
}
export interface Agent1 {
  /**
   * The identifier for the Agent object
   */
  "@id"?: string;
  /**
   * The type of the agent, the prov ontology is only used in the prov-o ods:CreateUpdateTombstoneEvent
   */
  "@type":
    | "schema:Person"
    | "schema:Organization"
    | "schema:SoftwareApplication"
    | "prov:Person"
    | "prov:SoftwareAgent";
  /**
   * The primary unique identifier of the Agent object. All identifiers will also be added to the ods:hasIdentifiers array
   */
  "schema:identifier"?: string;
  /**
   * Full name of the agent
   */
  "schema:name"?: string;
  /**
   * Contains all roles associated with the agent in the context of the Digital Object. Should always contain at least one role
   *
   * @minItems 1
   */
  "ods:hasRoles"?: [
    {
      /**
       * The identifier for the agent role, preferably a URL to a controlled vocabulary
       */
      "@id"?: string;
      /**
       * The type of the object, in this case schema:Role
       */
      "@type": "schema:Role";
      /**
       * The category that best matches the nature of a role of an Agent
       */
      "schema:roleName": string;
      /**
       * Date the agent began the role
       */
      "schema:startDate"?: string;
      /**
       * Date the agent ended the role
       */
      "schema:endDate"?: string;
      /**
       * Can be used to indicate the order of importance when there are multiple agents with the same role. Lower order means higher importance.
       */
      "schema:position"?: number;
    },
    ...{
      /**
       * The identifier for the agent role, preferably a URL to a controlled vocabulary
       */
      "@id"?: string;
      /**
       * The type of the object, in this case schema:Role
       */
      "@type": "schema:Role";
      /**
       * The category that best matches the nature of a role of an Agent
       */
      "schema:roleName": string;
      /**
       * Date the agent began the role
       */
      "schema:startDate"?: string;
      /**
       * Date the agent ended the role
       */
      "schema:endDate"?: string;
      /**
       * Can be used to indicate the order of importance when there are multiple agents with the same role. Lower order means higher importance.
       */
      "schema:position"?: number;
    }[]
  ];
  /**
   * Email of the agent
   */
  "schema:email"?: string;
  /**
   * URL to a website of the agent
   */
  "schema:url"?: string;
  /**
   * Contains all identifiers associated with the agent
   */
  "ods:hasIdentifiers"?: Identifier[];
}
export interface Agent2 {
  /**
   * The identifier for the Agent object
   */
  "@id"?: string;
  /**
   * The type of the agent, the prov ontology is only used in the prov-o ods:CreateUpdateTombstoneEvent
   */
  "@type":
    | "schema:Person"
    | "schema:Organization"
    | "schema:SoftwareApplication"
    | "prov:Person"
    | "prov:SoftwareAgent";
  /**
   * The primary unique identifier of the Agent object. All identifiers will also be added to the ods:hasIdentifiers array
   */
  "schema:identifier"?: string;
  /**
   * Full name of the agent
   */
  "schema:name"?: string;
  /**
   * Contains all roles associated with the agent in the context of the Digital Object. Should always contain at least one role
   *
   * @minItems 1
   */
  "ods:hasRoles"?: [
    {
      /**
       * The identifier for the agent role, preferably a URL to a controlled vocabulary
       */
      "@id"?: string;
      /**
       * The type of the object, in this case schema:Role
       */
      "@type": "schema:Role";
      /**
       * The category that best matches the nature of a role of an Agent
       */
      "schema:roleName": string;
      /**
       * Date the agent began the role
       */
      "schema:startDate"?: string;
      /**
       * Date the agent ended the role
       */
      "schema:endDate"?: string;
      /**
       * Can be used to indicate the order of importance when there are multiple agents with the same role. Lower order means higher importance.
       */
      "schema:position"?: number;
    },
    ...{
      /**
       * The identifier for the agent role, preferably a URL to a controlled vocabulary
       */
      "@id"?: string;
      /**
       * The type of the object, in this case schema:Role
       */
      "@type": "schema:Role";
      /**
       * The category that best matches the nature of a role of an Agent
       */
      "schema:roleName": string;
      /**
       * Date the agent began the role
       */
      "schema:startDate"?: string;
      /**
       * Date the agent ended the role
       */
      "schema:endDate"?: string;
      /**
       * Can be used to indicate the order of importance when there are multiple agents with the same role. Lower order means higher importance.
       */
      "schema:position"?: number;
    }[]
  ];
  /**
   * Email of the agent
   */
  "schema:email"?: string;
  /**
   * URL to a website of the agent
   */
  "schema:url"?: string;
  /**
   * Contains all identifiers associated with the agent
   */
  "ods:hasIdentifiers"?: Identifier[];
}
/**
 * Contains the spatial region or named place of where the ods:Event took place
 */
export interface Location {
  /**
   * The identifier for the Location object. Contains the same information as the dwc:locationID
   */
  "@id"?: string;
  /**
   * The type of the digital object, in this case a ods:Location
   */
  "@type": "ods:Location";
  /**
   * An identifier for the set of ods:Location information. May be a global unique identifier or an identifier specific to the data set
   */
  "dwc:locationID"?: string;
  /**
   * The name of the continent in which the ods:Location occurs
   */
  "dwc:continent"?: string;
  /**
   * The name of the water body in which the ods:Location occurs
   */
  "dwc:waterBody"?: string;
  /**
   * The name of the island group in which the ods:Location occurs
   */
  "dwc:islandGroup"?: string;
  /**
   * The name of the island on or near which the ods:Location occurs
   */
  "dwc:island"?: string;
  /**
   * The name of the country or major administrative unit in which the ods:Location occurs
   */
  "dwc:country"?: string;
  /**
   * The standard code for the country in which the ods:Location occurs
   */
  "dwc:countryCode"?: string;
  /**
   * The name of the next smaller administrative region than country (state, province, canton, department, region, etc.) in which the ods:Location occurs
   */
  "dwc:stateProvince"?: string;
  /**
   * The full, unabbreviated name of the next smaller administrative region than stateProvince (county, shire, department, etc.) in which the ods:Location occurs
   */
  "dwc:county"?: string;
  /**
   * The full, unabbreviated name of the next smaller administrative region than county (city, municipality, etc.) in which the ods:Location occurs. Do not use this term for a nearby named place that does not contain the actual ods:Location
   */
  "dwc:municipality"?: string;
  /**
   * The specific description of the place
   */
  "dwc:locality"?: string;
  /**
   * The original textual description of the place
   */
  "dwc:verbatimLocality"?: string;
  /**
   * The lower limit of the range of elevation (altitude, usually above sea level), in meters
   */
  "dwc:minimumElevationInMeters"?: number;
  /**
   * An identifier for the geographic region within which the ods:Location occurred
   */
  "dwc:higherGeographyID"?: string;
  /**
   * A list (concatenated and separated) of geographic names less specific than the information captured in the dwc:locality term
   */
  "dwc:higherGeography"?: string;
  /**
   * The upper limit of the range of elevation (altitude, usually above sea level), in meters
   */
  "dwc:maximumElevationInMeters"?: number;
  /**
   * The original description of the elevation (altitude, usually above sea level) of the ods:Location
   */
  "dwc:verbatimElevation"?: string;
  /**
   * The lesser distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation
   */
  "dwc:minimumDistanceAboveSurfaceInMeters"?: number;
  /**
   * The greater distance in a range of distance from a reference surface in the vertical direction, in meters. Use positive values for locations above the surface, negative values for locations below. If depth measures are given, the reference surface is the location given by the depth, otherwise the reference surface is the location given by the elevation
   */
  "dwc:maximumDistanceAboveSurfaceInMeters"?: number;
  /**
   * The lesser depth of a range of depth below the local surface, in meters
   */
  "dwc:minimumDepthInMeters"?: number;
  /**
   * The greater depth of a range of depth below the local surface, in meters
   */
  "dwc:maximumDepthInMeters"?: number;
  /**
   * The original description of the depth below the local surface
   */
  "dwc:verbatimDepth"?: string;
  /**
   * The vertical datum used as the reference upon which the values in the elevation terms are based
   */
  "dwc:verticalDatum"?: string;
  /**
   * Information about the source of this ods:Location information. Could be a publication (gazetteer), institution, or team of individuals
   */
  "dwc:locationAccordingTo"?: string;
  /**
   * Comments or notes about the ods:Location
   */
  "dwc:locationRemarks"?: string;
  "ods:hasGeoreference"?: Georeference;
  "ods:hasGeologicalContext"?: GeologicalContext;
}
/**
 * An object which describes the geographical reference of the location of the specimen
 */
export interface Georeference {
  /**
   * The identifier for the Geo Reference object.
   */
  "@id"?: string;
  /**
   * The type of the object, in this case ods:Georeference
   */
  "@type": "ods:Georeference";
  /**
   * The verbatim original spatial coordinates of the ods:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem
   */
  "dwc:verbatimCoordinates"?: string;
  /**
   * The geographic latitude (in decimal degrees, using the spatial reference system given in dwc:geodeticDatum) of the geographic center of a ods:Location. Positive values are north of the Equator, negative values are south of it. Legal values lie between -90 and 90, inclusive
   */
  "dwc:decimalLatitude"?: number;
  /**
   * The verbatim original latitude of the ods:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem
   */
  "dwc:verbatimLatitude"?: string;
  /**
   * The geographic longitude (in decimal degrees, using the spatial reference system given in dwc:geodeticDatum) of the geographic center of a ods:Location. Positive values are east of the Greenwich Meridian, negative values are west of it. Legal values lie between -180 and 180, inclusive
   */
  "dwc:decimalLongitude"?: number;
  /**
   * The verbatim original longitude of the ods:Location. The coordinate ellipsoid, geodeticDatum, or full Spatial Reference System (SRS) for these coordinates should be stored in dwc:verbatimSRS and the coordinate system should be stored in dwc:verbatimCoordinateSystem
   */
  "dwc:verbatimLongitude"?: string;
  /**
   * The coordinate format for the dwc:verbatimLatitude and dwc:verbatimLongitude or the dwc:verbatimCoordinates of the ods:Location
   */
  "dwc:verbatimCoordinateSystem"?: string;
  /**
   * The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geographic coordinates given in dwc:decimalLatitude and dwc:decimalLongitude are based
   */
  "dwc:geodeticDatum"?: string;
  /**
   * The horizontal distance (in meters) from the given dwc:decimalLatitude and dwc:decimalLongitude describing the smallest circle containing the whole of the ods:Location. Leave the value empty if the uncertainty is unknown, cannot be estimated, or is not applicable (because there are no coordinates). Zero is not a valid value for this term
   */
  "dwc:coordinateUncertaintyInMeters"?: number;
  /**
   * A decimal representation of the precision of the coordinates given in the dwc:decimalLatitude and dwc:decimalLongitude
   */
  "dwc:coordinatePrecision"?: number;
  /**
   * The ratio of the area of the point-radius (dwc:decimalLatitude, dwc:decimalLongitude, dwc:coordinateUncertaintyInMeters) to the area of the true (original, or most specific) spatial representation of the ods:Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given point-radius does not completely contain the original representation. The dwc:pointRadiusSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, the dwc:pointRadiusSpatialFit is 1
   */
  "dwc:pointRadiusSpatialFit"?: number;
  /**
   * A Well-Known Text (WKT) representation of the shape (footprint, geometry) that defines the ods:Location. A ods:Location may have both a point-radius representation (see dwc:decimalLatitude) and a footprint representation, and they may differ from each other
   */
  "dwc:footprintWKT"?: string;
  /**
   * https://rs.tdwg.org/dwc/terms/footprintSRS
   */
  "dwc:footprintSRS"?: string;
  /**
   * The ellipsoid, geodetic datum, or spatial reference system (SRS) upon which the geometry given in dwc:footprintWKT is based
   */
  "dwc:verbatimSRS"?: string;
  /**
   * The ratio of the area of the dwc:footprintWKT to the area of the true (original, or most specific) spatial representation of the ods:Location. Legal values are 0, greater than or equal to 1, or undefined. A value of 1 is an exact match or 100% overlap. A value of 0 should be used if the given dwc:footprintWKT does not completely contain the original representation. The dwc:footprintSpatialFit is undefined (and should be left empty) if the original representation is any geometry without area (e.g., a point or polyline) and without uncertainty and the given georeference is not that same geometry (without uncertainty). If both the original and the given georeference are the same point, the dwc:footprintSpatialFit is 1
   */
  "dwc:footprintSpatialFit"?: number;
  /**
   * The date on which the ods:Location was georeferenced
   */
  "dwc:georeferencedDate"?: string;
  /**
   * A description or reference to the methods used to determine the spatial footprint, coordinates, and uncertainties
   */
  "dwc:georeferenceProtocol"?: string;
  /**
   * A list (concatenated and separated) of maps, gazetteers, or other resources used to georeference the ods:Location, described specifically enough to allow anyone in the future to use the same resources
   */
  "dwc:georeferenceSources"?: string;
  /**
   * Notes or comments about the spatial description determination, explaining assumptions made in addition or opposition to the those formalized in the method referred to in dwc:georeferenceProtocol
   */
  "dwc:georeferenceRemarks"?: string;
  /**
   * The agent(s) involved in the georeferencing of this location, uses `ods:Agent`
   */
  "ods:hasAgents"?: Agent3[];
}
export interface Agent3 {
  /**
   * The identifier for the Agent object
   */
  "@id"?: string;
  /**
   * The type of the agent, the prov ontology is only used in the prov-o ods:CreateUpdateTombstoneEvent
   */
  "@type":
    | "schema:Person"
    | "schema:Organization"
    | "schema:SoftwareApplication"
    | "prov:Person"
    | "prov:SoftwareAgent";
  /**
   * The primary unique identifier of the Agent object. All identifiers will also be added to the ods:hasIdentifiers array
   */
  "schema:identifier"?: string;
  /**
   * Full name of the agent
   */
  "schema:name"?: string;
  /**
   * Contains all roles associated with the agent in the context of the Digital Object. Should always contain at least one role
   *
   * @minItems 1
   */
  "ods:hasRoles"?: [
    {
      /**
       * The identifier for the agent role, preferably a URL to a controlled vocabulary
       */
      "@id"?: string;
      /**
       * The type of the object, in this case schema:Role
       */
      "@type": "schema:Role";
      /**
       * The category that best matches the nature of a role of an Agent
       */
      "schema:roleName": string;
      /**
       * Date the agent began the role
       */
      "schema:startDate"?: string;
      /**
       * Date the agent ended the role
       */
      "schema:endDate"?: string;
      /**
       * Can be used to indicate the order of importance when there are multiple agents with the same role. Lower order means higher importance.
       */
      "schema:position"?: number;
    },
    ...{
      /**
       * The identifier for the agent role, preferably a URL to a controlled vocabulary
       */
      "@id"?: string;
      /**
       * The type of the object, in this case schema:Role
       */
      "@type": "schema:Role";
      /**
       * The category that best matches the nature of a role of an Agent
       */
      "schema:roleName": string;
      /**
       * Date the agent began the role
       */
      "schema:startDate"?: string;
      /**
       * Date the agent ended the role
       */
      "schema:endDate"?: string;
      /**
       * Can be used to indicate the order of importance when there are multiple agents with the same role. Lower order means higher importance.
       */
      "schema:position"?: number;
    }[]
  ];
  /**
   * Email of the agent
   */
  "schema:email"?: string;
  /**
   * URL to a website of the agent
   */
  "schema:url"?: string;
  /**
   * Contains all identifiers associated with the agent
   */
  "ods:hasIdentifiers"?: Identifier[];
}
/**
 * An object which describes the geological context of th location of the specimen.
 */
export interface GeologicalContext {
  /**
   * The identifier for the Geological Context object.
   */
  "@id"?: string;
  /**
   * The type of the object, in this case ods:GeologicalContext
   */
  "@type": "ods:GeologicalContext";
  /**
   * The full name of the earliest possible geochronologic eon or lowest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:earliestEonOrLowestEonothem"?: string;
  /**
   * The full name of the latest possible geochronologic eon or highest chrono-stratigraphic eonothem or the informal name ("Precambrian") attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:latestEonOrHighestEonothem"?: string;
  /**
   * The full name of the earliest possible geochronologic era or lowest chronostratigraphic erathem attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:earliestEraOrLowestErathem"?: string;
  /**
   * The full name of the latest possible geochronologic era or highest chronostratigraphic erathem attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:latestEraOrHighestErathem"?: string;
  /**
   * The full name of the earliest possible geochronologic period or lowest chronostratigraphic system attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:earliestPeriodOrLowestSystem"?: string;
  /**
   * The full name of the latest possible geochronologic period or highest chronostratigraphic system attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:latestPeriodOrHighestSystem"?: string;
  /**
   * The full name of the earliest possible geochronologic epoch or lowest chronostratigraphic series attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:earliestEpochOrLowestSeries"?: string;
  /**
   * The full name of the latest possible geochronologic epoch or highest chronostratigraphic series attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:latestEpochOrHighestSeries"?: string;
  /**
   * The full name of the earliest possible geochronologic age or lowest chronostratigraphic stage attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:earliestAgeOrLowestStage"?: string;
  /**
   * The full name of the latest possible geochronologic age or highest chronostratigraphic stage attributable to the stratigraphic horizon from which the specimen was collected
   */
  "dwc:latestAgeOrHighestStage"?: string;
  /**
   * The full name of the lowest possible geological biostratigraphic zone of the stratigraphic horizon from which the specimen was collected
   */
  "dwc:lowestBiostratigraphicZone"?: string;
  /**
   * The full name of the highest possible geological biostratigraphic zone of the stratigraphic horizon from which the specimen was collected
   */
  "dwc:highestBiostratigraphicZone"?: string;
  /**
   * The combination of all litho-stratigraphic names for the rock from which the specimen was collected
   */
  "dwc:lithostratigraphicTerms"?: string;
  /**
   * The full name of the lithostratigraphic group from which the specimen was collected
   */
  "dwc:group"?: string;
  /**
   * The full name of the lithostratigraphic formation from which the specimen was collected
   */
  "dwc:formation"?: string;
  /**
   * The full name of the lithostratigraphic member from which the specimen was collected
   */
  "dwc:member"?: string;
  /**
   * The full name of the lithostratigraphic bed from which the specimen was collected
   */
  "dwc:bed"?: string;
}
