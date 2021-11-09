import { Link } from "react-router-dom";

export const Home = ({ members }) => {
  return members.map((member, idx) => (
    <Link
      key={member.id}
      to={
        member.type === "pj"
          ? `/company/${member.id}`
          : `/customer/${member.id}`
      }
    >
      {member.name}
    </Link>
  ));
};
