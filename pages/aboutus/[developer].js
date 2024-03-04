import { useRouter } from "next/router";

const DeveloperPage = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const router = useRouter();
  const developerId = Number(router.query.developer);
  if (isNaN(developerId) || developerId < 0 || developerId >= details.length) {
    return <h1>Not a valid developer id</h1>;
  }
  return (
    <>
      <h1>{details[developerId].name}</h1>
      <h1>{details[developerId].role}</h1>
    </>
  );
};

export default DeveloperPage;
