// import { NYBusiness } from "/scripts/BusinessProvider";
import { AgentList, AgentSearchFunction } from "./AgentList";
import { BusinessSearchFunction } from "./BusinessList";
import { BusinessList  } from "/scripts/BusinessList.js";
import {  NewYorkBusinessList  } from "/scripts/BusinessNY.js";
import { ManufacturingBusinessList } from "/scripts/Manufacturing.js"

BusinessList();
NewYorkBusinessList();
BusinessSearchFunction();
ManufacturingBusinessList();
AgentList();
AgentSearchFunction();