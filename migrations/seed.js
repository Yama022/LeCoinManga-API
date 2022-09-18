const {
    Role,
    Status,
    Condition,
    OriginCountry,
    Type
} = require('../app/models');

const {
    DATA: data
} = require('../app/constants');
const {
    log: {
        error,
        success
    }
} = require('../app/utils');

class Seed {
    constructor() {
        this.roles = data.roles;
        this.statuses = data.statuses;
        this.conditions = data.conditions;
        this.originCountries = data.originCountries;
        this.types = data.types;
    }

    async start() {
        try {
            await this.seedRoles();
            await this.seedStatuses();
            await this.seedConditions();
            await this.seedOriginCountries();
            await this.seedTypes();
        } catch (e) {
            error(e);
        }
    }

    async seedRoles() {
        let counter = 0;

        for (const role of this.roles) {
            try {
                await Role.create({
                    label: role.label
                });

                counter++;
            } catch (e) {
                console.log(e);
                error(e);
            }
        }

        success(`${counter} roles seeded successfully`);
    }

    async seedStatuses() {
        let counter = 0;

        for (const status of this.statuses) {
            try {
                await Status.create({
                    label: status.label
                });

                counter++;
            } catch (e) {
                console.log(e);
                error(e);
            }
        }

        success(`${counter} statuses seeded successfully`);
    }

    async seedConditions() {
        let counter = 0;

        for (const condition of this.conditions) {
            try {
                await Condition.create({
                    label: condition.label
                });

                counter++;
            } catch (e) {
                console.log(e);
                error(e);
            }
        }

        success(`${counter} conditions seeded successfully`);
    }

    async seedOriginCountries() {
        let counter = 0;

        for (const country of this.originCountries) {
            try {
                await OriginCountry.create({
                    label: country.label,
                    image_url: country.image_url
                });

                counter++;
            } catch (e) {
                console.log(e);
                error(e);
            }
        }

        success(`${counter} countries seeded successfully`);
    }

    async seedTypes() {
        let counter = 0;

        for (const type of this.types) {
            try {
                await Type.create({
                    label: type.label,
                    is_nsfw: type.is_nsfw
                });

                counter++;
            } catch (e) {
                console.log(e);
                error(e);
            }
        }

        success(`${counter} types seeded successfully`);
    }
}

const seed = new Seed();
seed.start();