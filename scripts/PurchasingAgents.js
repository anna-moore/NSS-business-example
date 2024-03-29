import { useBusiness } from "./BusinessProvider.js";

const businesses = useBusiness();
const agents = businesses.map((business) => {
  const agent = {
    fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
    company: business.companyName,
    phoneNumber: business.phoneWork
  };
  return agent;
});

export const useAgents = () => {
  return agents.slice();
};