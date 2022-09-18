const Author = require('./author');
const Condition = require('./condition');
const Manga = require('./manga');
const OfferPicture = require('./offerPicture');
const Offer = require('./offer');
const OriginCountry = require('./originCountry');
const RefreshToken = require('./refreshToken');
const ResetPasswordToken = require('./resetPasswordToken');
const Role = require('./role');
const Status = require('./status');
const Type = require('./type');
const User = require('./user');

/** *****  USER ROLE ***** */
Role.hasMany(User, {
  as: 'users',
  foreignKey: 'role_id',
});

User.belongsTo(Role, {
  as: 'role',
  foreignKey: {
    name: 'role_id',
    allowNull: false,
    defaultValue: 1,
  },
});
/** ********************** */

/** *****  USER PASSWORD TOKEN ***** */
User.hasMany(ResetPasswordToken, {
  as: 'reset_password_token',
  foreignKey: 'user_id',
});

ResetPasswordToken.belongsTo(User, {
  as: 'user',
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
});
/** ********************** */


/** *****  USER REFRESH TOKEN ***** */
User.hasMany(RefreshToken, {
  as: 'refresh_token',
  foreignKey: 'user_id',
});

RefreshToken.belongsTo(User, {
  as: 'user',
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
});
/** ********************** */

/** *****  MANGA ORIGIN COUNTRY ***** */
OriginCountry.hasMany(Manga, {
  as: 'mangas',
  foreignKey: 'origin_country_id',
});

Manga.belongsTo(OriginCountry, {
  as: 'origin_country',
  foreignKey: {
    name: 'origin_country_id',
    allowNull: false,
  },
});
/** ********************** */

/** *****  MANGA STATUS ***** */
Status.hasMany(Manga, {
  as: 'mangas',
  foreignKey: 'status_id',
});

Manga.belongsTo(Status, {
  as: 'status',
  foreignKey: {
    name: 'status_id',
    allowNull: false,
  },
});
/** ********************** */

/** *****  MANGA AUTHOR ***** */
Author.hasMany(Manga, {
  as: 'mangas',
  foreignKey: 'author_id',
});

Manga.belongsTo(Author, {
  as: 'author',
  foreignKey: {
    name: 'author_id',
    allowNull: false,
  },
});
/** ********************** */

/** ***** OFFER MANGA ***** */
Manga.hasMany(Offer, {
  as: 'offers',
  foreignKey: 'manga_id',
});

Offer.belongsTo(Manga, {
  as: 'manga',
  foreignKey: {
    name: 'manga_id',
    allowNull: false,
  },
});
/** ********************** */

/** ***** CONDITION OFFER ***** */
Condition.hasMany(Offer, {
  as: 'offers',
  foreignKey: 'condition_id',
});

Offer.belongsTo(Condition, {
  as: 'condition',
  foreignKey: {
    name: 'condition_id',
    allowNull: false,
  },
});
/** ********************** */

/** ***** CONDITION OFFER ***** */
Type.hasMany(Offer, {
  as: 'offers',
  foreignKey: 'type_id',
});

Offer.belongsTo(Type, {
  as: 'type',
  foreignKey: {
    name: 'type_id',
    allowNull: false,
  },
});
/** ********************** */

/** ***** OFFER PICTURE N/N ***** */
Offer.belongsToMany(OfferPicture, {
  as: 'pictures',
  through: 'offer_has_offer_pictures',
  foreignKey: 'offer_id',
  otherKey: 'picture_id',
});

OfferPicture.belongsToMany(Offer, {
  as: 'offers',
  through: 'offer_has_offer_pictures',
  foreignKey: 'picture_id',
  otherKey: 'offer_id',
});
/** ********************** */

/** ***** MANGA TYPE N/N ***** */
Manga.belongsToMany(Type, {
  as: 'types',
  through: 'manga_has_types',
  foreignKey: 'manga_id',
  otherKey: 'type_id',
});

Type.belongsToMany(Manga, {
  as: 'mangas',
  through: 'manga_has_types',
  foreignKey: 'type_id',
  otherKey: 'manga_id',
});
/** ********************** */

module.exports = {
  Author,
  Condition,
  Manga,
  OfferPicture,
  Offer,
  OriginCountry,
  RefreshToken,
  ResetPasswordToken,
  Role,
  Status,
  Type,
  User,
}