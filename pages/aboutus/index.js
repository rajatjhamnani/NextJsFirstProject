import Link from "next/link";
const AboutUsPage = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <>
      <h1>This is my About Us page</h1>
      {details.map((data, idx) => (
        <Link key={data.id} href={`/aboutus/${idx}`}>
          <h1>{data.name}</h1>
        </Link>
      ))}
    </>
  );
};
export default AboutUsPage;
