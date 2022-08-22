/* eslint-disable @next/next/no-img-element */

import { FaGithub, FaExternalLinkAlt, FaCalendar, FaComment } from 'react-icons/fa'
import { UserCardContainer, UserCardContent, UserCardInfo, UserCardNameContainer } from "./styles";

interface PostCardProps {
  username: string;
  title: string;
  date: string;
  numberOfComments: number;
  url: string;
}

export function PostCard({ username, title, date, numberOfComments, url}: PostCardProps) {
  return (
    <UserCardContainer>
      <UserCardContent>
        <UserCardNameContainer>
          <h2>{title}</h2>
          <a 
            href={url} 
            target="_blank" rel="noopener noreferrer"
          >
            GitHub
            <FaExternalLinkAlt size="12px" color="#3294F8" />
          </a>

        </UserCardNameContainer>

        <UserCardInfo>
          <span> 
            <FaGithub size="18px" color="#3A536B" /> 
            {username}
          </span>

          <span> 
            <FaCalendar size="18px" color="#3A536B" /> 
            {date}
          </span>

          <span> 
            <FaComment size="18px" color="#3A536B" /> 
            {`${numberOfComments} comentário(s)`}
          </span>
        </UserCardInfo>
      </UserCardContent>
    </UserCardContainer>
  )
}