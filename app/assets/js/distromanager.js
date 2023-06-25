const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'https://raw.githubusercontent.com/DucFilm/COZ/c669351863a90adbeecde7dd0f7e22b5a9596e84/distribution.json'
exports.REMOTE_DISTRO_URL = 'https://raw.githubusercontent.com/DucFilm/COZ/c669351863a90adbeecde7dd0f7e22b5a9596e84/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api