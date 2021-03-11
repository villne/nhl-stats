interface IStandings {
    standingsType: string;
    division: {
        id: number;
        name: string;
        link: string;
    };
    teamRecords: [
        {
            team: {
                id: number;
                name: string;
                link: string;
            };
            leagueRecord: {
                wins: number;
                losses: number;
                ot: number;
                type: string;
            };
            regulationWins: number;
            goalsAgainst: number;
            goalsScored: number;
            points: number;
            divisionRank: string;
            divisionL10Rank: string;
            divisionRoadRank: string;
            divisionHomeRank: string;
            conferenceRank: string;
            conferenceL10Rank: string;
            conferenceRoadRank: string;
            conferenceHomeRank: string;
            leagueRank: string;
            leagueL10Rank: string;
            leagueRoadRank: string;
            leagueHomeRank: string;
            wildCardRank: string;
            row: number;
            gamesPlayed: number;
            streak: {
                streakType: string;
                streakNumber: number;
                streakCode: string;
            };
            pointsPercentage: number;
            ppDivisionRank: string;
            ppConferenceRank: string;
            ppLeagueRank: string;
            lastUpdated: string;
        }
    ];
}

interface ISchedule {
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalMatches: number;
    wait: number;
    dates: [
        date: string,
        totalItems: number,
        totalEvents: number,
        totalGames: number,
        totalMatches: number,
        games: [
            gamePk: number,
            link: string,
            gameType: string,
            season: string,
            gameDate: string,
            status: {
                abstractGameState: string;
                codedGameState: string;
                detailedState: string;
                statusCode: string;
                startTimeTBD: boolean;
            },
            teams: {
                away: {
                    leagueRecord: {
                        wins: number;
                        losses: number;
                        ot: number;
                        type: string;
                    };
                    score: number;
                    team: {
                        id: number;
                        name: string;
                        link: string;
                    };
                };
                home: {
                    leagueRecord: {
                        wins: number;
                        losses: number;
                        ot: number;
                        type: string;
                    };
                    score: number;
                    team: {
                        id: number;
                        name: string;
                        link: string;
                    };
                };
            }
        ]
    ];
}

interface IPeople {
    id: number;
    fullName: string;
    firstName: string;
    lastName: string;
    primaryNumber: number;
    birthDate: Date;
    birthCity: string;
    birthCountry: string;
    nationality: string;
    height: number;
    weight: number;
    active: boolean;
    rookie: boolean;
    shoottsCatches: string;
    rosterStatus: string;
    currentTeam: {
        name: string;
    };
    primaryPosition: {
        code: string;
        name: string;
    };
}
