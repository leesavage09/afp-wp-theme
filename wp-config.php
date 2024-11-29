<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'SiBMbxcqww<7R=Ri%[PE2hrYSE`Z9nJ,:f:Xa25JC,JTyHNc0<P:Jy904Ky04<I(' );
define( 'SECURE_AUTH_KEY',   'q:Ryg{): t<6^X8ad b/#v^pB%Ax!gwy~no0tymD&5wBmF)A5jy|) 0g|otX]D2S' );
define( 'LOGGED_IN_KEY',     '>!g=6cm7[mj*udd[42_H^fi8z *fcNg{epP9$FfQwHTin|-^0A[?h#2E[d-X)cyq' );
define( 'NONCE_KEY',         '^UawHHlhr|FS6BkJl}r6jIt!c[pVjE;+=<#Sps/ol,M{W#_9].~hJ{-wjy9K{}F)' );
define( 'AUTH_SALT',         's+t>R/c3/zIcNN3J ,YZ4J aykGYUI%v;/Z^I$-$,S-WOb,V&^!U~5;.Z{@ID6?o' );
define( 'SECURE_AUTH_SALT',  ']Zf&KRXS#a):3Tw=X@}eMqZ1Kd#{?NeKo7s.BF]VgZ+e?Gnl|uxUx>j,e:?g,4/~' );
define( 'LOGGED_IN_SALT',    '3J2QI[(;<)ciZ*F/B)v:ijBF57CSKDvx}C6D:<L;pJ(P!6s_wE,.{{fV5I9lqQ(?' );
define( 'NONCE_SALT',        'CjI<!B>KGy0!{Ig%A#3ba eyJ/t)*NE:Z]e2VP|937cLPmeZ+r)F@Ajt-|)A]z5,' );
define( 'WP_CACHE_KEY_SALT', 'GoB$--[,U1I*`ZhOQD`}=OXKtj`twY2~AAbeaqE9xJVJ^LF^>!JzI]wliPRV%Q0Z' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */
define("WP_DEVELOPMENT_MODE", "THEME");

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
