# AS-Visualization-in-Neo4j

Two part Project-

a) Visualization using CAIDA Dataset in Neo4j graph db.
The Demo Folder contains the CSV files used for visualization.These are preprocessed files and original data can be obtained from the CAIDA website. Likewise ASN-Name mapping was also created. The demo_script in the Demo folder is the needed Neo4j Script to be run to get the visualization. 

b) Visualization of real time stream provided by ATLAS RIPE using d3.js
Large chunk obtained from https://github.com/vdidonato/Traceroute-consistency-check. We had to connect this to the right ATLAS RIPE APIs which are free and then find it's equivalent static route from Part 1 of the project to get a clear picture of difference between actual routing (ATLAS) and theoretical routing (CAIDA dataset). We did end up finding discrepencies in these two and were highlighted in our final report.
