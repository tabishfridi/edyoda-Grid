import Card from "./Card";
import { details } from "./Info";


export default function Grid() {
  var i = 0;

  return (
    <div className="grid">
      {details.map((blog) => {
        i++;
        return (
          <Card
            key={i}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            desc={blog.description}
            link={blog.link}
          />
        );
      })}
    </div>
  );
}
