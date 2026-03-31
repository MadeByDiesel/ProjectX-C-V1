import { StrategyConfig } from './types';

export const MNQ_DELTA_TREND_CONFIG: StrategyConfig = {
  // === SYMBOL CONFIG ===
  symbol: 'MNQ',

  // === TIME FILTER ===
  tradingStartTime: '09:45',
  tradingEndTime:   '12:30',

  // === DELTA CONFIGURATION (force easy entry) ===
  deltaSMALength: 20,           
  deltaSpikeThreshold: 450,   // 450 base 
  deltaSurgeMultiplier: 1.8,  // 1.4 base
  breakoutLookbackBars: 20,   // 20 base 
  deltaSlopeExitLength: 3,     

  // === EMA CONFIGURATION ===
  emaLength: 21,            
  useEmaFilter: true,       
  htfEMALength: 9,
  higherTimeframe: 15,
  htfUseForming: true,

  // === ATR & EXIT CONFIGURATION ===
  atrProfitMultiplier: 1.0,    
  atrStopLossMultiplier: 0.50,  
  minAtrToTrade: 9,        
  minBarsBeforeExit: 0,

  // NEW (v0.5)
  atrCap: 10,             // points, cap ATR at entry (Mar27: 12→10, saves additional $162/ses)
  useAtrCap: true,
  tickExitGraceMs: 0,  // time-based grace before trailing

  // === TRAILING STOP CONFIGURATION ===
  useTrailingStop: true,
  trailActivationATR: 0.125,
  trailOffsetATR: 0.125,
  
  // ... existing configs ...
  fadeLookback: 3,
  deltaFadeRatio: 0.7,

  // === POSITION SIZING ===
  contractQuantity: 1,

  // === RISK MANAGEMENT ===
  dailyProfitTarget: 1500,
  maxTotalDrawdown: 2500,
  maxDailyDrawdown: 2500,

  requireDelta: true,                // set true only if you MUST have true delta from feed
  deltaScale: 1,   

  // Intra-bar detection settings
  useIntraBarDetection: true,              // Enable intra-bar signals
  intraBarCheckIntervalMs: 100,            // Check every 100ms
  intraBarMinAccumulationMs: 2500,         // Wait 2.5 seconds before first check
  intraBarConfirmationChecks: 3,           // Require 3 consecutive confirmations
  intraBarConfirmationWindowMs: 300,       // Within 300ms window

  htfMarginThreshold: 15,

  // Cooldown between intra-bar signals (Mar27: was hardcoded 2000ms)
  intraBarCooldownMs: 4000,

  sendWebhook: false,
  webhookUrl: '' //'http://192.168.4.170:8080/signal?secret=toast',
};