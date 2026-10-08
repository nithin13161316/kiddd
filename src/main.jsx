import memory1 from "./assets/memory1.jpg";
import memory2 from "./assets/memory2.jpg";
import memory3 from "./assets/memory3.jpg";
import memory4 from "./assets/memory4.png";
import memory5 from "./assets/memory5.jpg";
import memory6 from "./assets/memory6.jpg";
import memory7 from "./assets/memory7.jpg";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Gift, Camera, Cake, Star, ArrowDown, X } from "lucide-react";
import "./styles.css";

const photos = [
  memory1,
  memory2,
  memory3,
  memory4,
  memory5,
  memory6,
  memory7,
];

const pop = {
  hidden: { opacity: 0, y: 35, scale: .96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: .7, ease: "easeOut" } }
};

function FloatingDoodles() {
  return (
    <div className="doodles" aria-hidden="true">
      {["💗","⭐","🌸","🧸","🎀","✨","🍓","☁️","💫","🐻"].map((x,i)=>(
        <motion.span
          key={i}
          className={`doodle d${i}`}
          animate={{ y:[0,-16,0], rotate:[-5,5,-5] }}
          transition={{ duration: 3+i*.25, repeat: Infinity, ease:"easeInOut", delay:i*.15 }}
        >{x}</motion.span>
      ))}
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [celebrated, setCelebrated] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const celebrate = () => {
    setCelebrated(true);
    setTimeout(() => setCelebrated(false), 4500);
  };

  return (
    <div className="app">
      <FloatingDoodles />
      <AnimatePresence>
        {celebrated && (
          <div className="confetti-layer" aria-hidden="true">
            {Array.from({length: 55}).map((_,i)=>(
              <motion.i
                key={i}
                initial={{ y:-40, x:`${Math.random()*100}vw`, rotate:0, opacity:1 }}
                animate={{ y:"110vh", rotate: 720, opacity:0 }}
                transition={{ duration: 2.4+Math.random()*1.4, delay:Math.random()*.45 }}
                style={{ left:`${Math.random()*100}%` }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <header className="nav">
        <div className="brand"><span>🎀</span> for my Kid</div>
        <a href="#memories">memories</a>
      </header>

      <section className="hero">
        <motion.div
          className="hero-card"
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.9 }}
        >
          <motion.div className="sticker" animate={{ rotate:[-7,7,-7] }} transition={{duration:2.5,repeat:Infinity}}>
            <span>🎂</span>
            <small>birthday<br/>kid</small>
          </motion.div>

          <div className="eyebrow"><Sparkles size={15}/> a tiny website made with love <Sparkles size={15}/></div>
          <h1>Happy Birthday,<br/><em>Kid</em> 💗</h1>
          <p className="hero-copy">
            To my cute, sweet, slightly annoying and very special <b>Kid</b>.
            Today is officially your day. 🌷
          </p>

          <motion.button
            className="cute-btn"
            whileHover={{ scale:1.05, rotate:-1 }}
            whileTap={{ scale:.95 }}
            onClick={() => { setOpened(true); document.getElementById("letter")?.scrollIntoView({behavior:"smooth"}); }}
          >
            <Gift size={19}/> Open your surprise
          </motion.button>

          <div className="scroll-note"><ArrowDown size={15}/> there is more below...</div>
        </motion.div>
      </section>

      <section id="letter" className="section">
        <motion.div className="letter-wrap" variants={pop} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}}>
          <div className="paper-tape">MADE JUST FOR YOU ✨</div>
          <div className="letter-icon">💌</div>
          <p className="mini-title">Dear Kid,</p>
          <h2>One little birthday letter.</h2>
          <div className="letter">
            <p><b>Happy Birthday, Kiddd! 🥹💗</b></p>
            <p>
              I honestly don't know how to write this without making it sound too serious 😂
              but you're my cute little kid, and you're really special to me.
            </p>
            <p>
              You're literally the only person who can make my normal day better without
              even trying. <i>(Sometimes you make it worse too 🤭 but that's a different matter 😂)</i>
            </p>
            <p>
              And yeah, sometimes you're annoying 😂 but that's also what makes you <b>you</b>.
            </p>
            <p>
              I'll always try to make you happy, and I'll try my best to be good to you
              without hurting you — <b>never-ending promise 🤭</b>.
              <i>(And sometimes I'll make you cry toooo 🤭😂)</i>
            </p>
            <p>
              I hope you always have good people around you — like that Anna, Charan,
              Satya Sai and your sweet Chikkanth 🤭😂. And I hope you keep smiling and
              enjoying all the little things.
            </p>
            <p className="highlight">
              And listen… no matter how old you get, <b>you are still my Kid.</b> 😂
              That position is permanent. No promotions, no resignation, no escape.
              <b>I won't leave you fr.</b> 😭💗
            </p>
            <p>
              As always, <b>you're my cute little Kid.</b> 🥹🫶
            </p>
            <p><b>Once again, Happy Birthday, Kiddd! 🎂💗</b></p>
          </div>
        </motion.div>
      </section>

      <section id="memories" className="section memories-section">
        <motion.div className="section-head" variants={pop} initial="hidden" whileInView="show" viewport={{once:true}}>
          <span className="pill"><Camera size={14}/> our little memories</span>
          <h2>A tiny gallery of <em>you & me</em></h2>
          <p>Proof that we have collected some pretty good moments. 📸</p>
        </motion.div>

        <div className="gallery">
          {photos.map((photo,i)=>(
            <motion.button
              className={`photo p${i+1}`}
              key={photo}
              onClick={()=>setLightbox(photo)}
              whileHover={{ y:-8, rotate:i%2 ? 1 : -1, scale:1.015 }}
              whileTap={{scale:.97}}
            >
              <img src={photo} alt={`Memory ${i+1}`} />
              <span>{["cute kids","good times","that smile","silly us","just vibes","favorite moment","another one 💗"][i]}</span>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="section surprise-section">
        <motion.div
          className="section-head"
          variants={pop}
          initial="hidden"
          whileInView="show"
          viewport={{once:true}}
        >
          <span className="pill"><Gift size={14}/> a small surprise</span>
          <h2>For my <em>Kid</em> 💗</h2>
          <p>Okay... one tiny thing I actually promise. 🤭</p>
        </motion.div>

        <motion.div
          className={`surprise-box-wrap ${opened ? "opened" : ""}`}
          initial={{opacity:0, y:25}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true, amount:.25}}
        >
          <motion.div
            className="surprise-glow"
            animate={{scale:[1,1.08,1], opacity:[.35,.55,.35]}}
            transition={{duration:2.4, repeat:Infinity}}
          />

          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.div
                key="closed"
                className="gift-scene"
                initial={{opacity:0, scale:.92}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:.85, y:-20}}
              >
                <div className="mini-doodles">💗 ✨ 🌸</div>
                <motion.div
                  className="gift-box"
                  animate={{y:[0,-7,0], rotate:[-1,1,-1]}}
                  transition={{duration:2.2, repeat:Infinity, ease:"easeInOut"}}
                >
                  <div className="gift-lid"><span>🎀</span></div>
                  <div className="gift-body"><span>♥</span><span>♥</span><span>♥</span></div>
                </motion.div>
                <div className="gift-bunny">🐰</div>
                <h3>A tiny surprise for my Kid</h3>
                <motion.button
                  className="cute-btn surprise-open-btn"
                  whileHover={{scale:1.06}}
                  whileTap={{scale:.94}}
                  onClick={()=>setOpened(true)}
                >
                  <Gift size={18}/> Click to open 💗
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="opened"
                className="gift-scene opened-scene"
                initial={{opacity:0, scale:.86}}
                animate={{opacity:1, scale:1}}
                transition={{duration:.55}}
              >
                <motion.div
                  className="gift-burst"
                  initial={{scale:0}}
                  animate={{scale:1}}
                  transition={{type:"spring", stiffness:180}}
                >
                  💗 ✨ 💗 ✨ 💗
                </motion.div>
                <div className="opened-gift">
                  <div className="gift-bunny-top">🐰</div>
                  <div className="promise-card">
                    <span>💌</span>
                    <h3>I won't break my promise 😍</h3>
                    <p>
                      I'll keep trying to be good to you, keep making you smile,
                      and keep being there for my Kid.
                    </p>
                    <small>Promise... even when you annoy me 🤭💗</small>
                  </div>
                  <div className="gift-base">🎁</div>
                </div>
                <motion.button
                  className="tiny-reset"
                  whileTap={{scale:.92}}
                  onClick={()=>setOpened(false)}
                >
                  close surprise
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="final-section">
        <motion.div className="final-card" initial={{opacity:0,scale:.94}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.7}}>
          <div className="cloud">☁️</div>
          <div className="cake">🎂</div>
          <span className="pill">one last surprise</span>
          <h2>Now make a wish, Kid. ✨</h2>
          <p>
            May your days be softer, your smile bigger, your heart lighter,
            and your life full of beautiful little moments.
          </p>
          <motion.button className="cute-btn big" onClick={celebrate} whileHover={{scale:1.06}} whileTap={{scale:.95}}>
            <Cake size={20}/> {celebrated ? "Happy Birthday, Kid! 🎉" : "Celebrate your day!"}
          </motion.button>
          <AnimatePresence>
            {celebrated && (
              <motion.div className="final-love" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}}>
                <Star size={17} fill="currentColor"/> Keep smiling, Shivani. You're genuinely special. 💗
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <footer>Made especially for my Kid 🎀</footer>

      <AnimatePresence>
        {lightbox && (
          <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setLightbox(null)}>
            <motion.button className="close" onClick={()=>setLightbox(null)}><X/></motion.button>
            <motion.img src={lightbox} initial={{scale:.8}} animate={{scale:1}} onClick={e=>e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
