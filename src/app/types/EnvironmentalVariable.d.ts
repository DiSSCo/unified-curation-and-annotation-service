/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Environmental variables to supply to the a Digital Object, non-sensitive
 */
export interface EnvironmentalVariable {
  /**
   * The name of a non-sensitive property or environmental variable
   */
  "schema:name": string;
  /**
   * Value to be stored in the "name" field. NOT for sensitive information.
   */
  "schema:value": string | number | boolean;
}