##About##

This repository contains code for exploring and prototyping interactions between AsTeRICS and GPII.

For more information on the AsTeRICS and GPII projects, please see:

 * AsTeRICS: http://www.asterics.eu/
 * AsTeRICS on GitHub: https://github.com/asterics/AsTeRICS
 * GPII: http://gpii.net/
 * GPII on GitHub: https://github.com/GPII

##Node.js Binding for ASAPI##

The Thrift compiler can be downloaded from:

http://thrift.apache.org/

Generate a Node.js binding for the ASAPI:

    thrift --gen js:node PATH_TO\AsTeRICS\ACS\ASAPI.NET\asapi.thrift

Install the Thrift runtime library for Node.js:

    npm install thrift
