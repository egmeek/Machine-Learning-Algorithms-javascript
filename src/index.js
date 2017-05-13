import { euclideanDistance } from './find-similar-users/euclidean-distance-score';
import { moviesCritics } from '../recommendations';

/**
 * To calculate the distance between Toby and LaSalle,
 * take the difference in each axis, square them and add them together,
 * then take the square root of the sum.
 */
euclideanDistance(moviesCritics, 'Toby', 'Mick LaSalle');
