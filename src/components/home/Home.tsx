import React, { useEffect, useState } from 'react';
import { News } from './News';
import './Home.scss';

interface ScheduleProps {}

export const ScheduleGames: React.FC<ScheduleProps> = () => {
  const [loading, setLoading] = useState(true);
  const [schelude, setSchelude] = useState<ISchedule>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://statsapi.web.nhl.com/api/v1/schedule`);
        const data = await response.json();
        setSchelude(data);
        setLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='game-container'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>Games Today</h1>
            <table>
              <tr>
                <th>Away Team</th>
                <th>Home Team</th>
                <th>Score</th>
              </tr>
              {schelude?.dates.map((item: any) => {
                return item.games.map((game: any) => {
                  return (
                    <tr>
                      <td>{game.teams.away.team.name}</td>
                      <td>{game.teams.home.team.name}</td>
                      <td>
                        {game.teams.away.score} - {game.teams.home.score}
                      </td>
                    </tr>
                  );
                });
              })}
            </table>
          </div>
        )}
      </div>
      <News />
    </div>
  );
};
