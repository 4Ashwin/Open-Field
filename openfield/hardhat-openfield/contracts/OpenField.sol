pragma solidity ^0.8.4;

contract OpenField {
    string public name;
    mapping(uint256 => Farmer) public farmers;
    mapping(uint256 => Producer) public producers;
    mapping(uint256 => Distributor) public distributors;
    mapping(uint256 => Crop) public crops;

    mapping(uint256 => PesticideFarmer) public pesticidesFarmer;
    mapping(uint256 => Pesticide) public pesticides;
    mapping(uint256 => PesticideDistributor) public pesticidesDistributor;

    uint256 public farmerCount = 0;
    uint256 public producerCount = 0;
    uint256 public cropCount = 0;
    uint256 public pesticideFarmerCount = 0;
    uint256 public pesticideCount = 0;

    struct Farmer {
        uint256 id;
        string name;
        string location;
        string longitude;
        string latitude;
    }
    struct Distributor {
        uint256 id;
        string name;
        string location;
        string longitude;
        string latitude;
    }
    struct Crop {
        uint256 id;
        uint256 farmer_id;
        string name;
    }
    struct PesticideFarmer {
        uint256 id;
        uint256 farmer_id;
        uint256 pesticide_id;
    }
    struct Pesticide {
        uint256 id;
        uint256 producer_id;
        string name;
        uint256 quantity;
        string ingredient;
        string batchno;
        string manufacture_date;
        string expiry_date;
    }

    struct PesticideDistributor {
        uint256 id;
        uint256 distributor_id;
        uint256 pesticide_id;
    }
    struct Producer {
        uint256 id;
        string name;
        string dealer_name;
    }

    constructor() {
        name = "OpenField";
    }

    event NewFarmer(Farmer);
    event NewPesticide(Pesticide);

    function addPesticide(
        uint256 _producer_id,
        uint256 _quantity,
        string memory _ingredient,
        string memory _batchno,
        string memory _manufacture_date,
        string memory _expiry_date
    ) public {
        // require(bytes(_producer_id).length > 0);
        // require(bytes(_quantity).length > 0);
        require(bytes(_ingredient).length > 0);
        require(bytes(_batchno).length > 0);
        require(bytes(_manufacture_date).length > 0);
        require(bytes(_expiry_date).length > 0);

        pesticideCount++;

        Pesticide storage pesticide = pesticides[pesticideCount];

        pesticide.id = pesticideCount;
        pesticide.producer_id = _producer_id;
        pesticide.quantity = _quantity;
        pesticide.ingredient = _ingredient;
        pesticide.batchno = _batchno;
        pesticide.manufacture_date = _manufacture_date;
        pesticide.expiry_date = _expiry_date;

        emit NewPesticide(pesticide);
    }

    function getProcudersPesticides(
        uint256 _id
    ) external view returns (Pesticide[] memory) {
        uint currentIndex = 0;
        uint count = 0;
        for (uint i = 0; i < pesticideCount; i++) {
            uint currentId = i + 1;
            Pesticide storage currentItem = pesticides[currentId];
            if (currentItem.producer_id == _id) {
                count += 1;
            }
        }
        Pesticide[] memory _pesticides = new Pesticide[](count);
        for (uint i = 0; i < pesticideCount; i++) {
            uint currentId = i + 1;
            Pesticide storage currentItem = pesticides[currentId];
            if (currentItem.producer_id == _id) {
                _pesticides[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return _pesticides;
    }

    // function addFarmer(
    //     string memory _cid,
    //     string memory _filename,
    //     string memory _location,
    //     string memory _longitude,
    //     string memory _latitude,
    //     string memory _time,
    //     string memory _date,
    //     string memory _category
    // ) public {
    //     require(bytes(_cid).length > 0);
    //     require(bytes(_filename).length > 0);
    //     require(bytes(_location).length > 0);
    //     require(bytes(_longitude).length > 0);
    //     require(bytes(_latitude).length > 0);
    //     require(bytes(_time).length > 0);
    //     require(bytes(_date).length > 0);
    //     require(bytes(_category).length > 0);

    //     farmerCount++;

    //     Farmer storage newFarmer = farmers[farmerCount];

    //     newFarmer.id = farmerCount;
    //     newFarmer.location = _location;
    //     newFarmer.longitude = _longitude;
    //     newFarmer.latitude = _latitude;

    //     emit NewFarmer(newFarmer);
    // }

    // function getFamerById(uint256 _id) external view returns (Farmer memory) {
    //     require(_id <= farmerCount);
    //     Farmer storage item = farmers[_id];
    //     return item;
    // }

    // function getAllFarmers() external view returns (Farmer[] memory) {
    //     uint currentIndex = 0;
    //     Farmer[] memory _farmers = new Farmer[](farmerCount);
    //     for (uint i = 0; i < farmerCount; i++) {
    //         uint currentId = i + 1;
    //         Farmer storage currentItem = farmers[currentId];
    //         _farmers[currentIndex] = currentItem;
    //         currentIndex += 1;
    //     }
    //     return _farmers;
    // }
}
