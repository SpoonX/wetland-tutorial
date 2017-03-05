const {EntityRepository} = require('wetland');

class ProductRepository extends EntityRepository {
  findDepleted() {
    return this.find({stock: 0});
  }
}

module.exports = ProductRepository;
