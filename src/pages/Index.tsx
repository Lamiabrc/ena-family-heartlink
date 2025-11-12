import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ZenaAvatar } from "@/components/zena/ZenaAvatar";
import { GlowCard } from "@/components/zena/GlowCard";
import { Heart, MessageCircle, Users, Sparkles, Star, Zap } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import zenaFace from "@/assets/zena-face.png";

const Index = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zena-turquoise/10 via-zena-violet/10 to-zena-rose/10">
        <ZenaAvatar size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zena-night via-zena-night/95 to-zena-night relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-zena-turquoise/20 to-zena-violet/20 blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center space-y-8 relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative spray-shadow paint-splatter"
        >
          <div className="stencil-card rounded-full p-2 bg-background/50 backdrop-blur-sm">
            <img 
              src={zenaFace} 
              alt="ZÉNA" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-foreground"
            />
          </div>
          {/* Spray paint effects around image */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-zena-turquoise/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-zena-violet/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 -right-8 w-8 h-8 bg-zena-rose/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold stencil-text tracking-wider relative drip-effect"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ZÉNA
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-bold uppercase tracking-wide max-w-2xl stencil-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          La Voix Qui Relie Les Cœurs
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/chat">
            <Button 
              size="lg" 
              className="text-xl px-10 py-7 bg-gradient-to-r from-zena-violet via-zena-rose to-zena-turquoise hover:scale-105 transition-transform shadow-2xl font-bold"
            >
              💬 Parler à ZÉNA
            </Button>
          </Link>
          <Link to="/auth">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <Zap className="w-5 h-5 mr-2" />
              Commencer
            </Button>
          </Link>
          <Link to="/dashboard?demo=true">
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
            >
              <Star className="w-5 h-5 mr-2" />
              Essayer la démo
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground stencil-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nos valeurs
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Bienveillance", desc: "Un espace sans jugement", color: "turquoise" as const, delay: 0 },
            { icon: MessageCircle, title: "Écoute", desc: "Chacun a le droit d'être entendu", color: "violet" as const, delay: 0.1 },
            { icon: Users, title: "Empathie", desc: "Comprendre les émotions de chacun", color: "rose" as const, delay: 0.2 },
            { icon: Sparkles, title: "Espoir", desc: "Une luciole dans la nuit", color: "turquoise" as const, delay: 0.3 }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: value.delay }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <GlowCard glowColor={value.color} className="p-6 text-center h-full stencil-card">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className={`w-12 h-12 mx-auto mb-4 text-zena-${value.color}`} />
                </motion.div>
                <h3 className="font-semibold mb-2 text-foreground stencil-text">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 stencil-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ce que ZÉNA vous apporte
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { emoji: "💬", title: "Dialogue émotionnel", desc: "Parlez librement à ZÉNA. Elle reformule vos émotions et vous aide à trouver les mots justes pour communiquer avec votre famille.", delay: 0 },
            { emoji: "🫧", title: "Tableau familial", desc: "Visualisez les émotions de chaque membre sous forme de bulles colorées. Une météo émotionnelle partagée pour mieux se comprendre.", delay: 0.1 },
            { emoji: "📖", title: "Journal partagé", desc: "Un espace commun pour déposer un mot, une photo ou un symbole de votre journée. ZÉNA crée un résumé poétique chaque semaine.", delay: 0.2 },
            { emoji: "✨", title: "Coups de pouce", desc: "Envoyez des messages positifs, des dessins ou des sons pour encourager un membre de votre famille.", delay: 0.3 }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ scale: 1.03 }}
            >
              <GlowCard className="p-8 h-full stencil-card bg-background/50 backdrop-blur-sm">
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.emoji}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-foreground stencil-text">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 relative z-10">
        <motion.div
          className="container mx-auto px-4 py-8 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-foreground">© 2025 ZÉNA Family by QVT Box</p>
          <p className="text-sm">Une IA émotionnelle pour toute la famille ✨</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
