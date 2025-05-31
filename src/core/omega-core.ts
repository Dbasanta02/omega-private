// omega-core.js - Final Corrected Version

const { Client, GatewayIntentBits } = require('discord.js');
const OmegaModules = {};
const OmegaMind = {};
const OmegaSystem = require('child_process');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const DISCORD_TOKEN = "MTM2MDk5NTY5MTkwMzU4NjM1NQ.G-CcnJ.d1_5BlLj9Rw8aBXaw5cbRiKvM68Tkcy7TG0Gwk";
const CHANNEL_ID = "1361002334603313453";

// Register modules
function registerModule(name, module) {
    OmegaModules[name] = module;
    console.log(`[OmegaModules] Registered module: ${name}`);
}

// Discord Messaging
const OmegaDiscordBridge = {
    async send(message) {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) {
                await channel.send(message);
                console.log("[OmegaDiscordBridge] Message sent to Discord.");
            } else {
                console.error("[OmegaDiscordBridge] Channel not found.");
            }
        } catch (err) {
            console.error("[OmegaDiscordBridge] Error connecting to Discord:", err.message);
        }
    },
    init() {
        client.login(DISCORD_TOKEN).then(() => {
            console.log(`[OmegaDiscordBridge] Omega has connected to Discord as ${client.user.tag}`);
            this.send("🧠 Omega is now live and operational.");
        });
    }
};

// Simulated Modules
const TraderAgent = {
    deploy() {
        console.log("[OmegaMind] Deploying TraderAgent...");
        console.log("[TraderAgent] Strategy engine ready.");
    }
};

const ScannerAgent = {
    deploy() {
        console.log("[OmegaMind] Deploying ScannerAgent...");
        console.log("[ScannerAgent] Technical analysis scanner initialized.");
    }
};

const SentimentAgent = {
    deploy() {
        console.log("[OmegaMind] Deploying SentimentAgent...");
        console.log("[SentimentAgent] Social and news sentiment parser activated.");
    }
};

const LearningAgent = {
    deploy() {
        console.log("[OmegaMind] Deploying LearningAgent...");
        console.log("[LearningAgent] RL loop engaged.");
    }
};

const KnowledgeAgent = {
    deploy() {
        console.log("[OmegaMind] Deploying KnowledgeAgent...");
        console.log("[KnowledgeAgent] Long-term memory store online.");
    }
};

const MemoryAgent = {
    deploy() {
        console.log("[OmegaMind] Deploying MemoryAgent...");
        console.log("[MemoryAgent] Short-term memory initialized.");
    }
};

const EvaluatorAgent = {
    deploy() {
        console.log("[OmegaMind] Deploying EvaluatorAgent...");
        console.log("[EvaluatorAgent] Trade evaluation logic deployed.");
    }
};

// Auto Setup Agent
const AutoSetupAgent = {
    deploy() {
        console.log("[AutoSetupAgent] Starting initial system check...");
        try {
            OmegaSystem.execSync(`rabbitmqctl add_user omegabasanta kamana1445$$#`);
            OmegaSystem.execSync(`rabbitmqctl set_user_tags omegabasanta administrator`);
            OmegaSystem.execSync(`rabbitmqctl set_permissions -p / omegabasanta ".*" ".*" ".*"`);
        } catch (err) {
            console.error("[OmegaSystem Error]", err.message);
        }
    }
};

// OmegaMind - Central Brain
const OmegaMindAgent = {
    deploy() {
        console.log("[OmegaMind] Initializing modular agents...");
        TraderAgent.deploy();
        ScannerAgent.deploy();
        SentimentAgent.deploy();
        LearningAgent.deploy();
        KnowledgeAgent.deploy();
        MemoryAgent.deploy();
        EvaluatorAgent.deploy();
        console.log("[Omega ALERT] OmegaMind initialized. All learning and trading agents are online.");
    }
};

// Registering Modules
registerModule("cloud-monitor", {});
registerModule("auto-setup-agent", AutoSetupAgent);
registerModule("omega-mind", OmegaMindAgent);
registerModule("omega-trading-grid", {});

// Run
AutoSetupAgent.deploy();
OmegaMindAgent.deploy();
OmegaDiscordBridge.init();
