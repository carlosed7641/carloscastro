import { FC } from "react"
import { ProjectListProps } from "../../interfaces"



export const Project: FC<ProjectListProps> = ({name, desc, languages, repo, url, urlImg}) => {

  return (
    <li>
      <img src={`./src/assets/images/${urlImg}.png`} alt="peluqueria" />
      <div>
        <p>{name}</p>
        <p>{desc}</p>
        <ul>
          {
            languages.map(value => (
             <li>{value}</li>
            ))
          }
        </ul>
        <div>
          <a href={repo} target='_blank' style={{marginRight: 10}}>Github</a>
          <a href={url}  target='_blank'>URL</a>
        </div>
      </div>
    </li>
  );
};
