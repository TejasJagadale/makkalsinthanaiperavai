import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const toggleReadMore1 = () => {
    setShowMore1(!showMore1);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const isMobile1 = window.innerWidth <= 768;

  const containerVariants1 = {
    hidden: { opacity: 0, x: isMobile1 ? 0 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const containerVariants2 = {
    hidden: { opacity: 0, x: isMobile1 ? 0 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const containerVariants3 = {
    hidden: { opacity: 0, y: isMobile1 ? 0 : 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <motion.div
        className="text-center home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="pt-4 mb-4 barathi-vizha-title1"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          மக்கள் சிந்தனைப் பேரவை{" "}
          <span className="barathi-vizha-subtitle1">-யின்</span>
        </motion.h1>
        <motion.h1
          className="mt-4 barathi-vizha-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          பாரதி விழா
        </motion.h1>

        <motion.div
          className="image-container position-relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div>
            <img
              src="/images/barathi.png"
              alt="Mahakavi Subramania Bharathiyar"
              className="img-fluid rounded bharathiyar-image"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="container mt-5">
        <motion.div
          className="row d-flex justify-content-center align-items-center"
          variants={containerVariants1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="col-12 col-md-6 text-start mb-4 mb-md-0">
            <h2 className="fsw-1 arimugam">அறிமுகம்</h2>
            <p className="fsw-2">
              மக்கள் சிந்தனைப் பேரவையின் தொடக்கத்திலிருந்து ஆண்டுதோறும் மகாகவி
              பாரதியின் பிறந்தநாளாகிய டிசம்பர் 11ஆம் தேதி பேரவை சார்பில் பாரதி
              விழா நடத்தப்பட்டு வருகிறது. இதுவரை 26 ஆண்டுகள் - ஆண்டு தவறாமல்,
              தேதி மாறாமல் ஈரோடு நகரில் 'பாரதி விழா' பேரவையால் நடத்தி
              வரப்பட்டுள்ளது.
            </p>
            <div className={`read-more-content ${showMore ? "expanded" : ""}`}>
              <p className="fsw-2">
                பேரவை நடத்தும் இப் பாரதி விழாவில் இளைஞர்கள் 'பாரதி ஜோதி' ஏந்தி
                அணிவகுப்பு நடத்துவது, மாநில அளவிலான ஒரு முக்கிய ஆளுமைக்கு பாரதி
                விருது வழங்குவது, ஒரு தனித்துவம் மிக்க சான்றோர் ஒருவரின்
                திருவுருவப் படத்தைத் திறப்பது, இலக்கியச் சொற்பொழிவுகள்
                இடம்பெறுவது ஆகிய நான்கு முக்கிய அம்சங்கள் இடம்பெறுகின்றன.
              </p>
            </div>
            <button className="btn melumbtn" onClick={toggleReadMore}>
              {showMore ? "முந்தையதை மறைக்க" : "மேலும் படிக்க"}
            </button>
          </div>
          <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
            <img
              src="/images/1998.jpg"
              alt="Bharathi Vizha"
              className="image1"
            />
          </div>
        </motion.div>
      </div>

      <div>
        <img src="/images/icon.png" alt="icon" className="icon-image" />
      </div>

      <div className="container">
        <motion.div
          className="row d-flex flex-column-reverse flex-md-row justify-content-center align-items-center"
          variants={containerVariants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="col-12 col-md-6 text-center">
            <img
              src="/images/1998(1).jpg"
              alt="Bharathi Vizha"
              className="image1"
            />
          </div>
          <div className="col-12 col-md-6 text-start mb-4 mb-md-0">
            <h2 className="fsw-1 arimugam">நோக்கம்</h2>
            <p className="fsw-2">
              மக்களிடையே தமிழ் மொழியின் தொன்மை, சிறப்பு, தனித்தன்மை போன்றவை
              குறித்த விழிப்புணர்வை ஏற்படுத்துவது... தமிழ் இலக்கியம், வரலாறு,
              அறிவியல், சமூகவியல் சிந்தனைகளை விதைப்பது... சமூக
              முன்னேற்றத்திற்கும் மாற்றத்திற்குமான தமிழ் இலக்கியக் கருத்துக்களை
              எடுத்துச் செல்வது... மனிதம் சார்ந்த, மக்கள் சார்ந்த, நாடு சார்ந்த,
              உலகம் சார்ந்த பல அரிய கருத்துகளை நூறாண்டுகளுக்கு முன்பே சொல்லிச்
              சென்றவர் மகாகவி பாரதி. இக்காலத்திற்கு ஏற்ற வகையில் பாரதியின்
              சமூகச் சிந்தனைகளின் அடிப்படைகளை மக்கள் மயமாக்குவது...
            </p>
            <div className={`read-more-content ${showMore1 ? "expanded" : ""}`}>
              <p className="fsw-2">
                ... அனைவருக்கும் கல்வி, அனைவருக்கும் உணவு, அனைவருக்கும் வாழ்க்கை
                என்ற பாரதியின் அடிநாதமான முழக்கத்தையும், சமூக ஏற்றத்தாழ்வுகள்,
                மதமாச்சாரியங்கள், பொருளாதார ஏற்ற இறக்கங்களற்ற சமூக அமைப்பை
                உருவாக்கக் கனவு கண்ட பாரதியின் லட்சியங்களையும் மனதிற் கொண்டு
                அவற்றை நனவாக்கும் முயற்சிகளில் ஒன்றே மக்கள் சிந்தனை பேரவையில்
                ஆண்டுதோறும் நடத்தப்படும் 'பாரதி விழா'. இது வெற்று விழா அல்ல...
                மொழி உணர்வை, இலக்கிய உணர்ச்சியை, சமூகச் சிந்தனையை பொதுமக்களிடையே
                மேம்படுத்த நடத்தப்படும் உயிரோட்டம் மிக்க பெருநிகழ்வு.
              </p>
            </div>
            <button className="btn melumbtn" onClick={toggleReadMore1}>
              {showMore1 ? "முந்தையதை மறைக்க" : "மேலும் படிக்க"}
            </button>
          </div>
        </motion.div>
      </div>
      <div className="mt-5 pb-5 peravai">
        <div className="container">
          <motion.div
            className="peravaimain"
            variants={containerVariants3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="peravai1">
              <img src="/images/image2.png" alt="" className="image2" />
            </div>
            <div className="peravai2">
              <h1 className="fsw-1 peravai2h1">பேரவையின் நிறுவனர்</h1>
              <p
                className={`fsw-2 ${
                  isMobile && !isExpanded ? "mobile-truncate" : ""
                }`}
                style={{ margin: "0" }}
              >
                <motion.div
                  variants={containerVariants1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  மக்கள் சிந்தனைப் பேரவையின் நிறுவனர் த. ஸ்டாலின் குணசேகரன்.
                  இவர் தனது பத்தாவது வயதில் 32 சக பள்ளி மாணவர்களை ஒன்றிணைத்து
                  'மாணவர் முன்னேற்ற சங்கம்' என்ற ஒரு அமைப்பைத் தொடங்கியவர். அந்த
                  அமைப்பின் பெயரை இரண்டு ஆண்டுகளில் 'பாரதி மாணவர் மன்றம்' என்று
                  மாற்றியவர். மாணவர்கள் அல்லாத வேலைக்கு செல்லும் இளைஞர்களையும்
                  இணைத்திடும் விதத்தில் 'பாரதி இளைஞர் மன்றம்' என்று இவ்வமைப்பு
                  இரண்டாவது முறையாக பெயர் மாற்றம் கண்டது. பாரதி பெயரில் இவர்
                  தொடர்ந்து நடத்தி வந்த அமைப்புகளும் நிகழ்வுகளும் தான்
                  பிற்காலத்தில் மக்கள் சிந்தனை பேரவை நடத்தி வருகிற 'பாரதி
                  விழா'க் களுக்கு அடிப்படை. 'பகத்சிங் இளைஞர் மன்றம் என்ற
                  அமைப்பையும் இணையாக நடத்தி வந்தார். பின்னர் இவற்றை எல்லாம்
                  ஒன்றிணைத்து 'இளைஞர் எழுச்சி இயக்கம்' என்ற அமைப்பை
                  ஏற்படுத்தினார். ஒரு கட்டத்தில் இளைஞர்களுக்கான இயக்கமாக
                  மட்டுமல்லாது ஒட்டுமொத்த மக்களுக்குமான அமைப்பைத் தோற்றுவிக்க
                  எண்ணி அவரால் 1998 இல் தொடங்கப்பட்ட இயக்கம்தான் 'மக்கள்
                  சிந்தனைப் பேரவை'. முன்னதாக 1982 இலேயே ஈரோட்டில் 'பாரதி
                  நூற்றாண்டு விழா' வை மிகச் சிறப்பாக நடத்தினார். பாரதியின்
                  கருத்துக்களை அடிப்படையாகக் கொண்டு பட்டிமன்றம், கலையரங்கம்,
                  கருத்தரங்கம் என தொடர்ந்து 40 ஆண்டுகளுக்கும் மேலாக நிகழ்ச்சிகள்
                  நடத்தி வருபவர். 'மக்கள் சிந்தனைப் பேரவை' தொடங்கப்பட்ட பின்னர்
                  'பாரதி விழா' வை பேரவை சார்பில் மாநிலத் தன்மையோடு கடந்த 26
                  ஆண்டுகளாக முன் நின்று நடத்தி வருகிறார். திருவள்ளுவர், பாரதி,
                  பாரதிதாசன் தமிழ் ஒளி, பட்டுக்கோட்டை உள்ளிட்ட அனைத்து முக்கிய
                  கவிஞர்களின் கருத்துக்களால் பெரிதும் ஈர்க்கப்பட்டிருக்கும் இவர்
                  பாரதி பெயரில் விழா நடத்தினாலும் தமிழ்ச் சிந்தனை மரபிலுள்ள
                  முற்போக்குக் கருத்துக்கள் அனைத்தையும் முழுமையாக ஏற்றுப் பரப்பி
                  வருபவர்.வழக்குரைஞர்கள், சொற்பொழிவாளர்கள், எழுத்தாளர்,
                  அரசியலாளர், அமைப்பாளர், இதழாளர், உள்ளிட்ட முன்னோக்குச்
                  செயல்பாட்டாளராக விளங்கியவர்.
                </motion.div>
              </p>

              {isMobile && (
                <div className="mt-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="btn btn-sm"
                  >
                    {isExpanded ? "முந்தையதை மறைக்க" : "மேலும் படிக்க"}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="jothi">
        <motion.div
          className="mt-5 mb-5 container"
          variants={containerVariants3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="fsw-1 jothih2">பாரதி ஜோதி</h2>
          <div className="barathijothi">
            <motion.div
              variants={containerVariants2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src="/images/image3.png" alt="" className="image3" />
            </motion.div>
            <p className="fsw-2 jothip">
              <motion.div
                variants={containerVariants3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                ஈரோடு கருங்கல்பாளையத்தில் 'மனிதறுக்கு மரணமில்லை' என்ற தலைப்பில்
                பாரதியாற்றிய இறுதிப் பேருரையை இன்றைய தலைமுறைக்கு நினைவூட்டும்
                நோக்கில் உரையாற்றிய இடத்திலிருந்து விழா அரங்கிற்கு இளைஞர்களால்
                எடுத்து வரப்படுவதே 'பாரதி ஜோதி' அறியாமையை, கல்லாமையை, இல்லாமையை
                சுட்டெரிக்கும் ஜோதி; நேர்மையும் உண்மையும் வாய்மையும் மிக்க
                மனிதர்களுக்கு 'என்றென்றும் மரணம் இல்லை' என்பதை எடுத்துரைக்கும்
                ஜோதி, சாதியம், தீண்டாமை, மதவெறி, வன்முறை, பெண்ணடிமை போன்ற
                அனைத்துவித மனிதநேயமற்ற நடைமுறைகளுக்கு எதிராக ஏந்தி வரப்படுவதே
                இந்த 'பாரதி ஜோதி'.
              </motion.div>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="sinthanai">
        <div className="container mt-5 mb-5 sinthanai1">
          <motion.div
            variants={containerVariants1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="fsw-1 sinthanaih2">மக்கள் சிந்தனைப் பேரவை</h2>
          </motion.div>
          <motion.div
            variants={containerVariants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src="/images/image4.png" alt="" className="image4" />
          </motion.div>
          <p className="fsw-2 sinthanaip">
            <motion.div
              variants={containerVariants3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              இது ஒரு சாதி, மத, அரசியல் கட்சி சார்பற்ற பொதுநல
              அமைப்பாகும்.1998இல் ஈரோடு நகரில் தொடங்கப்ட்ட இவ்வமைப்பு சென்ற
              ஆண்டு வெள்ளி விழவை நடத்தி முடித்துள்ளது. இப்போது இது மாநிலந்
              தழுவிய அமைப்பு. சமூக முன்னேற்றமும், சமூக மாற்றமும் இந்த அமைப்பின்
              பிரதான குறிக்கோள்களாக விளங்குகின்றன. ‘பேரற்ற உலகம்’ என்ற உலகப்
              பிரகடனத்திலிருந்து 'போதைப்பழக்கமில்லாத் தமிழகம்’ என்ற மாநில மக்கள்
              பிரச்சினை வரை ஆழ்ந்து கவனித்து- உள்வாங்கி அவற்றுக்கான
              தீர்வுக்காகச் சிந்திக்கும் அமைப்பு. செயல்படும் இயக்கம். வாசிக்க
              வேண்டுவதும் யோசிக்கத்தூண்டுவதும் சிந்தனைப் பேரவையின் தனித்துவம்
              மிக்க பணிகள்.
            </motion.div>
          </p>
        </div>
      </div>
      <div className="jothi">
        <div className="container mt-5 mb-5 jothi1">
          <motion.div
            variants={containerVariants1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="fsw-1 jothih3">
              பேரவையின் ஜப்பான் கிளை சார்பில் பாரதி விழா
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src="/images/image5.png" alt="" className="image5" />
          </motion.div>
          <p className="fsw-2 jothip">
            <motion.div
              variants={containerVariants3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              மக்கள் சிந்தனை பேரவையின் கால் நூற்றாண்டு காலத் தொடர் சேவை -
              தொடர்ச்சியான இயக்கம் - ஈரோடு பாரதி விழா - ஈரோடு புத்தகத் திருவிழா
              உள்ளிட்ட நிகழ்வுகள் ஏற்படுத்திய தாக்கத்தின் விளைவாக ஜப்பான்
              நாட்டில் வாழும் தமிழ் உணர்வாளர்கள் சிலர் இணைந்து பேரவையின் கிளையை
              ஜப்பான் நாட்டில் தலைநகரமான டோக்கியோ நகரில் தொடங்கினர். டோக்கியோ
              நகளில் 2003 ஆம் ஆண்டு அக்கிளை சார்பில் முதல் பாரதி விழாவை மிகவும்
              சிறப்பாக நடத்தி முடித்தனர்.
            </motion.div>
          </p>
          <div className={`read-more-content1 ${showMore1 ? "expanded1" : ""}`}>
            <p className="fsw-2 jothip">
              2024 ல் இரண்டாம் ஆண்டு பாரதி விழாவை அறிவியல் நாளோடு இணைத்து பெரு
              நிகழ்வாக நடத்தினர். 30-11-2024 ஆம் தேதி மாலை டோக்கியோ நகரில் உள்ள
              முக்கிய அங்கு ஒன்றில் நிகழ்வு நடைபெற்றது. இந்நிகழ்வில்
              தமிழகத்திலிருந்து சிறப்பு விருந்தினராக பங்கேற்ற ஐஎஸ்ஆர் ஏலின்,
              முன்னாள் இயக்குனர் டாக்டர் மயில்சாமி அண்ணாதுரை அவர்களும், சென்னை
              பல்கலைக்கழக தமிழ் மொழி துறைத் தலைவர் முனைவர் W.மணிகண்டன் அவர்களும்
              அழைக்கப்பட்டிருந்தனர். பேரவையின் தலைவர் த.ஸ்டாலின் குணசேகரன்
              ஈரோட்டில் இருந்தவாறு இணையம் வழியாக விழா அறிமுக உரையாற்றினார்.
            </p>
          </div>
          <button className="btn melumbtn" onClick={toggleReadMore1}>
            {showMore1 ? "முந்தையதை மறைக்க" : "மேலும் படிக்க"}
          </button>
        </div>
      </div>

      <div className="video-container mt-5">
        <div className="one">
          <img src="/images/curvedimage.png" alt="" className="image6 w-full" />
        </div>
        <div className="two">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/bCGkt2i_Srs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="enniya mt-5 mb-5">
        <motion.div
          variants={containerVariants1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <img src="/images/image8.png" alt="" className="image7" />
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <div>
              <img src="/images/colon1.png" alt="" className="colon1" />
            </div>
            <hr />
            <div>
              <img src="/images/poem.png" alt="" className="poem" />
            </div>
            <hr />
            <div>
              <img src="/images/colon2.png" alt="" className="colon2" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css";

// const Home = () => {
//   return (
//     <>
//       <div className="carousel-wrapper">
//         <Carousel fade>
//           <Carousel.Item className="custom-carousel-item">
//             <img className="d-block w-100 carousel-img" src="./Biwall.png" alt="First slide" />
//             <Carousel.Caption className="carousel-caption-bg">
//               <h3>Innovation for Tomorrow</h3>
//               <p>Leading the path to a smarter future.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item className="custom-carousel-item">
//             <img className="d-block w-100 carousel-img" src="./courier.png" alt="Second slide" />
//             <Carousel.Caption className="carousel-caption-bg">
//               <h3>Fast and Reliable</h3>
//               <p>Your trust, our commitment.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item className="custom-carousel-item">
//             <img className="d-block w-100 carousel-img" src="./Jums.png" alt="Third slide" />
//             <Carousel.Caption className="carousel-caption-bg">
//               <h3>Empowering Visions</h3>
//               <p>Transforming ideas into reality.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       <div className="container py-5">
//         <div className="row align-items-center">
//           <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
//             <h1 className="display-5 fw-bold mb-3">Welcome to Makkal Sinthana</h1>
//             <p className="lead text-muted">
//               We are a passionate team committed to delivering outstanding products and customer service.
//               With a focus on quality and innovation, we're always striving to improve and exceed expectations.
//             </p>
//           </div>
//           <div className="col-md-6 text-center">
//             <div className="info-box rounded-4 shadow-sm p-4">
//               <h4>Our Vision</h4>
//               <p>
//                 To be a beacon of creativity and service excellence, fostering ideas that inspire and transform.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
