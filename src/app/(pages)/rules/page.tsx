import LinkButton from "@/app/components/LinkButton";

export default function RulesPage() {
    return (
        <div className={"text-left"}>
            <p>&quot;Wits &amp; Wagers&quot; is a trivia and betting board game that combines knowledge and strategic wagering. Here are the simplified rules to make it easy to understand:</p>

            <h2>Objective:</h2>
            <p>Be the first player or team to reach a set number of points by correctly answering trivia questions and placing successful bets.</p>

            <h2>Components:</h2>
            <p>Trivia Question Cards<br />
            Betting Chips<br />
            Answer Boards<br />
            Markers<br />
            Scoreboard</p>

            <h2>Setup:</h2>

            <p>Each player or team receives an Answer Board, a Marker, and a set number of Betting Chips.<br />
            Shuffle the Trivia Question Cards and place them in a stack within reach of all players.</p>
            <h2>Gameplay:</h2>

            <p>One player, known as the Question Reader, draws a Trivia Question Card and reads the question aloud.<br />
            All players or teams write down their answer on their Answer Board and place it in the center of the table.<br />
            Answers are arranged on the table in numerical order.<br />
            Players or teams can now place their Betting Chips on the answer they believe is closest to the correct one, without going over.</p>

            <h2>Scoring:</h2>

            <p>The player or team with the correct answer earns points equal to the number on the Trivia Question Card.<br />
            Players or teams with Betting Chips on the correct answer also earn points based on the number of chips they placed.<br />
            The player or team with the most points becomes the Question Reader for the next round.</p>

            <h2>Additional Rules:</h2>

            <p>If no one has the correct answer, the points go to the closest answer without going over.<br />
            Players or teams can split their bets among different answers.<br />
            The first player or team to reach a predetermined score (e.g., 15 points) wins the game.</p>

            <h2>Tips:</h2>
            <p>Use strategy when placing bets; it&rsquo;s not just about knowing the answer.<br />
            Pay attention to how others are betting to inform your own choices.<br />
            Enjoy the game and have fun with the creative and surprising answers.<br />
            &quot;Wits &amp; Wagers&quot; is a game that encourages both knowledge and clever betting, making it accessible and entertaining for players of all ages.
            </p>
        </div>
    )
}