// General game balance variables

define([
], function(
) {

    return {
        initialCardSlots: 12,

        numberOfSystems: [
                18, // Small
                24, // Medium
                36, // Large
                54, // Uber
                78 // Rediq
        ],

        // New ramping feature so that the galaxy size.
        galaxySizeDiffMod: [
            1.25,
            1.2,
            1.15,
            1.1,
            1.0
        ],

        difficultyInfo: [
            {
                display_name: '!LOC:Easy',
                percent_vehicle: 0.55,
                percent_bot: 0.25,
                percent_air: 0.1,
                percent_naval: 0.075,
                percent_orbital: 0.025,
                rampDifficulty: true,
                adv_eco_mod: 3.0,
                adv_eco_mod_alone: 3.0,
                goForKill: false,
                mandatoryMinions: 0,
                minionMod: 0,
                bossDemandCheckMod: 1.75,
                useEasierSystemTemplate: true,
                microType: 0,
                neuralDataMod: 2.0,
                priority_scout_metal_spots: false,
                factory_build_delay_min: 60,
                factory_build_delay_max: 180,
                unable_to_expand_delay: 900,
                per_expansion_delay: 900,
                enable_commander_danger_responses: false,
                fabber_to_factory_ratio_basic: 2.0,
                fabber_to_factory_ratio_advanced: 1.0,
                fabber_alone_on_planet_mod: 1.0,
                basic_to_advanced_factory_ratio: 0,
                factory_alone_on_planet_mod: 1.0,
                min_basic_fabbers: 5,
                max_basic_fabbers: 15,
                min_advanced_fabbers: 3,
                max_advanced_fabbers: 20,
                personality_tags:
                [
                    "Default",
                    "GalacticWar",
                    "SlowerExpansion"
                ],
                econBase: 0.4,
                econRatePerDist: 0.005,
                metalDrainCheck: 0.14,
                metalDrainCheckPerDist: 0.003,
                metalDemandCheck: 0.21,
                metalDemandCheckPerDist: 0.004,
                energyDrainCheck: 0.25,
                energyDrainCheckPerDist: 0.003,
                energyDemandCheck: 0.3,
                energyDemandCheckPerDist: 0.004
            },
            {
                display_name: '!LOC:Normal',
                percent_vehicle: 0.45,
                percent_bot: 0.25,
                percent_air: 0.2,
                percent_naval: 0.05,
                percent_orbital: 0.05,
                rampDifficulty: true,
                adv_eco_mod: 1.0,
                adv_eco_mod_alone: 1.5,
                goForKill: true,
                mandatoryMinions: 0,
                minionMod: 0.6,
                bossDemandCheckMod: 1.25,
                useEasierSystemTemplate: false,
                microType: 1,
                neuralDataMod: 1.5,
                priority_scout_metal_spots: true,
                factory_build_delay_min: 10,
                factory_build_delay_max: 15,
                unable_to_expand_delay: 60,
                per_expansion_delay: 120,
                enable_commander_danger_responses: true,
                fabber_to_factory_ratio_basic: 1.5,
                fabber_to_factory_ratio_advanced: 1.0,
                fabber_alone_on_planet_mod: 1.5,
                basic_to_advanced_factory_ratio: 0,
                factory_alone_on_planet_mod: 0.75,
                min_basic_fabbers: 3,
                max_basic_fabbers: 10,
                min_advanced_fabbers: 3,
                max_advanced_fabbers: 20,
                personality_tags:
                [
                    "Default",
                    "GalacticWar",
                    "SlowerExpansion"
                ],
                econBase: 0.5,
                econRatePerDist: 0.01,
                metalDrainCheck: 0.24,
                metalDrainCheckPerDist: 0.004,
                metalDemandCheck: 0.36,
                metalDemandCheckPerDist: 0.005,
                energyDrainCheck: 0.35,
                energyDrainCheckPerDist: 0.004,
                energyDemandCheck: 0.45,
                energyDemandCheckPerDist: 0.005
            },
            {
                display_name: '!LOC:Hard',
                percent_vehicle: 0.45,
                percent_bot: 0.25,
                percent_air: 0.2,
                percent_naval: 0.05,
                percent_orbital: 0.05,
                rampDifficulty: true,
                adv_eco_mod: 1.1,
                adv_eco_mod_alone: 1.0,
                goForKill: true,
                mandatoryMinions: 0,
                minionMod: 0.6,
                bossDemandCheckMod: 1.25,
                useEasierSystemTemplate: false,
                microType: 1,
                neuralDataMod: 1.5,
                priority_scout_metal_spots: true,
                enable_commander_danger_responses: true,
                factory_build_delay_min: 0,
                factory_build_delay_max: 3,
                unable_to_expand_delay: 0,
                per_expansion_delay: 0,
                fabber_to_factory_ratio_basic: 1.0,
                fabber_to_factory_ratio_advanced: 1.0,
                fabber_alone_on_planet_mod: 2.0,
                basic_to_advanced_factory_ratio: 0,
                factory_alone_on_planet_mod: 0.5,
                min_basic_fabbers: 2,
                max_basic_fabbers: 6,
                min_advanced_fabbers: 3,
                max_advanced_fabbers: 20,
                personality_tags:
                [
                    "Default",
                    "GalacticWar"
                ],
                econBase: 0.5,
                econRatePerDist: 0.01,
                metalDrainCheck: 0.24,
                metalDrainCheckPerDist: 0.004,
                metalDemandCheck: 0.36,
                metalDemandCheckPerDist: 0.005,
                energyDrainCheck: 0.35,
                energyDrainCheckPerDist: 0.004,
                energyDemandCheck: 0.45,
                energyDemandCheckPerDist: 0.005,
                starting_location_evaluation_radius: 200
            },
            {
                display_name: '!LOC:Relentless',
                percent_vehicle: 0.45,
                percent_bot: 0.25,
                percent_air: 0.2,
                percent_naval: 0.05,
                percent_orbital: 0.05,
                rampDifficulty: true,
                adv_eco_mod: 1.2,
                adv_eco_mod_alone: 0.95,
                goForKill: true,
                microType: 2,
                mandatoryMinions: 0,
                minionMod: 0.75,
                bossDemandCheckMod: 1.0,
                useEasierSystemTemplate: false,
                enable_commander_danger_responses: true,
                neuralDataMod: 1.0,
                priority_scout_metal_spots: true,
                factory_build_delay_min: 0,
                factory_build_delay_max: 0,
                unable_to_expand_delay: 0,
                per_expansion_delay: 0,
                fabber_to_factory_ratio_basic: 1.0,
                fabber_to_factory_ratio_advanced: 1.0,
                fabber_alone_on_planet_mod: 2.0,
                basic_to_advanced_factory_ratio: 0,
                factory_alone_on_planet_mod: 0.5,
                min_basic_fabbers: 2,
                max_basic_fabbers: 10,
                min_advanced_fabbers: 3,
                max_advanced_fabbers: 30,
                personality_tags:
                [
                    "Default",
                    "GalacticWar",
                    "PreventsWaste"
                ],
                econBase: 0.7,
                econRatePerDist: 0.01,
                metalDrainCheck: 0.24,
                metalDrainCheckPerDist: 0.005,
                metalDemandCheck: 0.46,
                metalDemandCheckPerDist: 0.006,
                energyDrainCheck: 0.45,
                energyDrainCheckPerDist: 0.005,
                energyDemandCheck: 0.60,
                energyDemandCheckPerDist: 0.006,
                starting_location_evaluation_radius: 300
            },
            {
                display_name: '!LOC:Absurd',
                percent_vehicle: 0.45,
                percent_bot: 0.25,
                percent_air: 0.2,
                percent_naval: 0.05,
                percent_orbital: 0.05,
                rampDifficulty: true,
                adv_eco_mod: 1.3,
                adv_eco_mod_alone: 0.85,
                goForKill: true,
                useEasierSystemTemplate: false,
                mandatoryMinions: 0,
                minionMod: 1,
                bossDemandCheckMod: 1.0,
                microType: 2,
                neuralDataMod: 1.0,
                priority_scout_metal_spots: true,
                factory_build_delay_min: 0,
                factory_build_delay_max: 0,
                unable_to_expand_delay: 0,
                enable_commander_danger_responses: true,
                per_expansion_delay: 0,
                fabber_to_factory_ratio_basic: 1.0,
                fabber_to_factory_ratio_advanced: 1.0,
                fabber_alone_on_planet_mod: 2.0,
                basic_to_advanced_factory_ratio: 0,
                factory_alone_on_planet_mod: 0.5,
                min_basic_fabbers: 2,
                max_basic_fabbers: 20,
                min_advanced_fabbers: 3,
                max_advanced_fabbers: 50,
                personality_tags:
                [
                    "Default",
                    "GalacticWar",
                    "PreventsWaste"
                ],
                econBase: 0.8,
                econRatePerDist: 0.02,
                metalDrainCheck: 0.44,
                metalDrainCheckPerDist: 0.005,
                metalDemandCheck: 0.55,
                metalDemandCheckPerDist: 0.006,
                energyDrainCheck: 0.61,
                energyDrainCheckPerDist: 0.005,
                energyDemandCheck: 0.7,
                energyDemandCheckPerDist: 0.006,
                starting_location_evaluation_radius: 400
            }
        ],

        workerMetalDrainCheck: [0.75, 0.6],
        workerEnergyDrainCheck: [0.85, 0.7],
        workerMetalDemandCheck: [0.9, 0.75],
        workerEnergyDemandCheck: [1.00, 0.85],
    };
});
