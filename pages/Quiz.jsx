import React from "react"
import { getLabubus } from "../api"
import { useWindowSize } from "react-use"
import Confetti from "react-confetti"
export default function Quiz() {
  const { width, height } = useWindowSize()

  const [labubu, setLabubu] = React.useState([])
  const [currentLabubu, setCurrentLabubu] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [listLength, setlistlength] = React.useState(0)
  const [answer, setAnswer] = React.useState("")
  const [responeText, setResponseText] = React.useState("")
  const [progress, setProgress] = React.useState(1)
  const [isWon, setIsWon] = React.useState(false)
  const [pressed, setPressed] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function loadLabubus() {
      setLoading(true)
      try {
        const data = await getLabubus()
        setLabubu(data)
    

        const shuffled = data.sort(() => 0.5 - Math.random())
    
        setLabubu(shuffled)
    
        setCurrentLabubu(shuffled[0])
        setlistlength(data.length)
    
      } catch (err) {
        setError(err)
    
      } finally {
        setLoading(false)
    
      }
    }
    loadLabubus()

  }, [])

  function handleChange(event) {
    setAnswer(event.target.value)

  }

  function handleSubmit(event) {
    event.preventDefault()

    game()

  }

  function game() {
    if (!currentLabubu) return


    const remaining = labubu.filter((labu) => currentLabubu.name !== labu.name)


    if (answer.toLowerCase() === currentLabubu.name.toLowerCase()) {
      setResponseText(`${answer} var riktig!`)
  
      setProgress((prev) => prev + 1)
  
      setLabubu(remaining)
  

      if (remaining.length > 0) {
        setCurrentLabubu(
          remaining[Math.floor(Math.random() * remaining.length)]
        )
    
      } else {
        setIsWon(true)
    
      }
    } else {
      if (remaining.length > 0) {
        setResponseText(`Feil, svaret var ${currentLabubu.name.toLowerCase()}`)
    
        setCurrentLabubu(
          remaining[Math.floor(Math.random() * remaining.length)]
        )
    
      }
    }

    setAnswer("")

  }

  function buttonPressed() {
    setPressed(true)

    setTimeout(() => setPressed(false), 100)

  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>

  }

  if (loading) {
    return <h1>Loading...</h1>

  }

  return (
    <div className="quiz-body">
      <div className="quiz-container">
        {isWon ? <Confetti width={width} height={height} /> : null}
        <h2>{isWon ? "Gratulerer du vant!" : "Gjett navnet til Labubuen!"}</h2>
        {currentLabubu ? <img src={currentLabubu.imageUrl} /> : ""}
        <form onSubmit={handleSubmit}>
          <label htmlFor=""></label>
          <input
            type="text"
            value={answer}
            onChange={handleChange}
            placeholder="mushi mushi"
          />
          <button
            onClick={buttonPressed}
            className={pressed ? "pressed" : ""}
            disabled={labubu.length === 0}
            type="submit"
          >
            Gjett
          </button>
        </form>
        <div className="responsetext">{responeText}</div>

        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${(progress / (listLength + 1)) * 100}%` }}
            ></div>
            <p>
              {progress - 1}/{listLength}
            </p>
        </div>
      </div>
    </div>
  )
}
