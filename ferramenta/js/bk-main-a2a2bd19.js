import {
    r as _0x506efa,
    R as _0xdce990,
    j as _0x4b75d7,
    E as _0x2aa0cf,
    u as _0x3e39f8,
    S as _0x34c214,
    a as _0x7c1173,
    b as _0x32effa,
    c as _0x529a91,
    d as _0x71f80b,
    e as _0x5038ba,
    f as _0x3150aa,
    g as _0x31e59f,
    h as _0x591048,
    T as _0x304b8b,
    i as _0x5344ac,
    k as _0x3946fb,
    l as _0x117cea,
    m as _0x2db6fc,
    I as _0x4192cd,
    n as _0x4a29b6,
    F as _0x23e7fe,
    o as _0x47e56c,
    p as _0x1f22bb
} from './bk-index-4fde9b62.js';
var e = Object['defineProperty'];
var r = function (_0x119b85, _0x5d1129) {
    return e(_0x119b85, 'name', {
        'value': _0x5d1129,
        'configurable': !![]
    });
};
var n = r(function (_0x141164) {
    _0x506efa['useEffect'](function () {
        var _0x6d0521 = document['head']['querySelectorAll']('style');
        var _0x2d5240 = !![], _0x9e703c = ![], _0x1e9258 = void 0x0;
        try {
            for (var _0x90246a = _0x6d0521[Symbol['iterator']](), _0x108eec; !(_0x2d5240 = (_0x108eec = _0x90246a['next']())['done']); _0x2d5240 = !![]) {
                var _0x5e3720 = _0x108eec['value'];
                if (_0x5e3720['innerHTML'] === _0x141164)
                    return;
            }
        } catch (_0x3ca44b) {
            _0x9e703c = !![];
            _0x1e9258 = _0x3ca44b;
        } finally {
            try {
                if (!_0x2d5240 && _0x90246a['return'] != null) {
                    _0x90246a['return']();
                }
            } finally {
                if (_0x9e703c) {
                    throw _0x1e9258;
                }
            }
        }
        var _0x3155cc = document['createElement']('style');
        _0x3155cc['innerHTML'] = _0x141164, document['head']['appendChild'](_0x3155cc);
    }, [_0x141164]);
}, 'useStyleInjection');
const findFirstElementInDOM = _0x472743 => {
    return _0x472743['filter'](_0x4e03a2 => _0x4e03a2 !== null)['sort']((_0x4f34c4, _0x36b156) => {
        if (!_0x4f34c4 || !_0x36b156)
            return 0x0;
        return _0x4f34c4['compareDocumentPosition'](_0x36b156) & Node['DOCUMENT_POSITION_FOLLOWING'] ? -0x1 : 0x1;
    })[0x0];
};
const insertReviewSection = _0x5ef6bb => {
    var _0x369d11, _0x3b8dd7;
    const _0x4e9757 = document['getElementById']('bk-review-section');
    const _0x14df02 = document['getElementById']('auto-bk-review-section');
    if (_0x4e9757 || _0x14df02) {
        console['log']('returned\x20because\x20already\x20review\x20section');
        return;
    }
    let _0x5b65d4;
    const _0x2e4999 = document['querySelectorAll']('.shopify-section[id*=\x22template\x22]');
    for (const _0x5e2a67 of _0x2e4999) {
        if (_0x5e2a67['querySelector']('h1') || _0x5e2a67['querySelector']('h2')) {
            _0x5b65d4 = _0x5e2a67;
            break;
        }
    }
    const _0x136d3a = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0x344885 = _0x5b65d4 ? _0x5b65d4['parentNode'] : _0x136d3a;
    const _0x50e92e = document['createElement']('div');
    _0x50e92e['classList']['add']('bk-reviews', _0x5ef6bb);
    _0x50e92e['style']['width'] = '100%';
    _0x50e92e['style']['height'] = 'fit-content';
    _0x50e92e['id'] = 'auto-bk-review-section';
    const _0x4ccaec = document['querySelector']('.container--flush');
    const _0x1e37ea = document['querySelector']('.shopify-section[id*=\x22recently-viewed-products\x22]');
    const _0x2d253b = document['querySelector']('.shopify-section[id*=\x22recommendations\x22]');
    const _0x2e58a6 = document['querySelector']('product-recommendations');
    const _0x1d70ea = document['querySelector']('.shopify-section[id*=\x22promotions\x22]');
    const _0x232571 = document['querySelector']('.shopify-section[id*=\x22product-content\x22]');
    const _0x26c081 = document['querySelector']('.shopify-section[id*=\x22information-tabs\x22]');
    const _0x58da82 = [
        _0x1e37ea,
        _0x2d253b,
        _0x2e58a6,
        _0x1d70ea
    ];
    const _0x1da541 = findFirstElementInDOM(_0x58da82);
    const _0x9b1704 = _0x1da541 == null ? void 0x0 : _0x1da541['parentNode'];
    if (_0x1da541 && _0x9b1704) {
        console['log']('insertBeforeSection', _0x1da541);
        _0x9b1704['insertBefore'](_0x50e92e, _0x1da541);
    } else if (_0x232571 == null ? void 0x0 : _0x232571['nextElementSibling']) {
        console['log']('productSection', _0x232571);
        (_0x369d11 = _0x232571['parentNode']) == null ? void 0x0 : _0x369d11['insertBefore'](_0x50e92e, _0x232571['nextElementSibling']);
    } else if (_0x26c081 == null ? void 0x0 : _0x26c081['nextElementSibling']) {
        console['log']('informationTabsSection', _0x26c081);
        (_0x3b8dd7 = _0x26c081['parentNode']) == null ? void 0x0 : _0x3b8dd7['insertBefore'](_0x50e92e, _0x26c081['nextElementSibling']);
    } else if ((_0x4ccaec == null ? void 0x0 : _0x4ccaec['parentNode']) && _0x4ccaec['nextElementSibling']) {
        console['log']('containerFlush', _0x4ccaec);
        _0x4ccaec['parentNode']['insertBefore'](_0x50e92e, _0x4ccaec['nextElementSibling']);
    } else if (_0x5b65d4) {
        if (_0x5b65d4['nextElementSibling']) {
            console['log']('after\x20targetSection');
            _0x344885 == null ? void 0x0 : _0x344885['insertBefore'](_0x50e92e, _0x5b65d4['nextElementSibling']);
        } else {
            console['log']('child\x20of\x20targetSectionParent');
            _0x344885 == null ? void 0x0 : _0x344885['appendChild'](_0x50e92e);
        }
    } else if (_0x136d3a) {
        console['log']('child\x20of\x20mainSection');
        _0x136d3a['appendChild'](_0x50e92e);
    } else {
        console['log']('no\x20section\x20found');
    }
    _0xdce990['render'](_0x4b75d7['jsx'](_0x2aa0cf, {
        'theme': _0x5ef6bb,
        'extension': 'review-section'
    }), _0x50e92e);
};
const insertStarSection = _0xf4d256 => {
    const _0x28ef98 = document['getElementById']('bk-star-section');
    const _0x3d6960 = document['getElementById']('auto-bk-star-section');
    if (_0x28ef98 || _0x3d6960) {
        console['log']('returned\x20because\x20already\x20star\x20section');
        return;
    }
    const _0x22ad5e = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0x32969f = [(_0x22ad5e == null ? void 0x0 : _0x22ad5e['querySelector']('h1')) ?? document['querySelector']('h1') ?? (_0x22ad5e == null ? void 0x0 : _0x22ad5e['querySelector']('h2')) ?? document['querySelector']('h2')];
    const _0x170d3d = document['querySelectorAll']('.small--hide\x20h1,\x20.small--hide\x20h2');
    _0x170d3d['forEach'](_0x35f1dc => {
        _0x32969f['push'](_0x35f1dc);
    });
    _0x32969f['forEach'](_0x1ef745 => {
        const _0x2c4e19 = _0x1ef745 == null ? void 0x0 : _0x1ef745['parentElement'];
        const _0x25eb66 = document['createElement']('div');
        _0x25eb66['classList']['add']('bk-reviews', _0xf4d256);
        _0x25eb66['id'] = 'auto-bk-star-section';
        if (_0x1ef745 && _0x2c4e19) {
            _0x1ef745['style']['marginBottom'] = '0';
            _0x2c4e19['insertBefore'](_0x25eb66, _0x1ef745['nextSibling']);
            _0xdce990['render'](_0x4b75d7['jsx'](_0x2aa0cf, {
                'theme': _0xf4d256,
                'extension': 'star-section'
            }), _0x25eb66);
        }
    });
};
function DefaultCollectionStarSection({
    reviewAmount: _0x5ab2f8,
    averageRating: _0x566565
}) {
    const _0x1003ee = _0x506efa['useRef'](null);
    const _0x5aa533 = _0x3e39f8(_0x1003ee);
    return _0x4b75d7['jsx']('div', {
        'ref': _0x1003ee,
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md',
        'style': { 'justifyContent': _0x5aa533 },
        'children': _0x4b75d7['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x4b75d7['jsx'](_0x34c214, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20mb-[1px]',
                    'averageRating': _0x566565
                }),
                _0x4b75d7['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]\x20tw-leading-[normal]',
                    'children': [
                        '(',
                        _0x5ab2f8,
                        ')'
                    ]
                })
            ]
        })
    });
}
function PianoCollectionStarSection({
    reviewAmount: _0x2c87f5,
    averageRating: _0x3a5ddd
}) {
    const _0x11770b = _0x506efa['useRef'](null);
    const _0x3c00ac = _0x3e39f8(_0x11770b);
    return _0x4b75d7['jsx']('div', {
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md\x20tw-items-center',
        'style': { 'justifyContent': _0x3c00ac },
        'children': _0x4b75d7['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x4b75d7['jsx'](_0x7c1173, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20tw-mb-[1px]',
                    'averageRating': _0x3a5ddd
                }),
                _0x4b75d7['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]',
                    'children': [
                        '(',
                        _0x2c87f5,
                        ')'
                    ]
                })
            ]
        })
    });
}
function collectionStarSectionFactory({
    theme: _0x387295,
    componentProps: _0x13493e
}) {
    const {
        reviewAmount: _0x467c6d,
        averageRating: _0x4d7102
    } = _0x13493e;
    const _0x16b6b5 = {
        'default': _0x4b75d7['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x467c6d,
            'averageRating': _0x4d7102
        }),
        'sol': _0x4b75d7['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x467c6d,
            'averageRating': _0x4d7102
        }),
        'classic': _0x4b75d7['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x467c6d,
            'averageRating': _0x4d7102
        }),
        'wide': _0x4b75d7['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x467c6d,
            'averageRating': _0x4d7102
        }),
        'piano': _0x4b75d7['jsx'](PianoCollectionStarSection, {
            'reviewAmount': _0x467c6d,
            'averageRating': _0x4d7102
        })
    };
    return _0x16b6b5[_0x387295] ?? _0x16b6b5['default'];
}
function CollectionStarSection({
    theme: _0x3efbd1,
    reviewAmount: _0x2f240a,
    averageRating: _0x48aded
}) {
    const _0xd21d42 = collectionStarSectionFactory({
        'theme': _0x3efbd1,
        'componentProps': {
            'reviewAmount': _0x2f240a,
            'averageRating': _0x48aded
        }
    });
    return _0x4b75d7['jsx']('div', {
        'className': 'tw-my-[0.75rem]',
        'children': _0xd21d42
    });
}
const getStoreProducts = async _0x5b448f => {
    const _0x18029a = 0xfa;
    const _0x21583e = 'https://' + _0x5b448f + '/products.json?limit=' + _0x18029a;
    const _0x411d03 = 0x5;
    const _0x5cc060 = 0x3;
    let _0x5692e2 = [];
    let _0x4dab08 = ![];
    for (let _0x106f3f = 0x0; _0x106f3f < _0x5cc060; _0x106f3f++) {
        await Promise['all'](new Array(_0x411d03)['fill'](0x0)['map'](async (_0x10130f, _0x5196dd) => {
            const _0x3f44e7 = _0x411d03 * _0x106f3f + _0x5196dd + 0x1;
            const _0x154714 = _0x21583e + '&page=' + _0x3f44e7;
            const _0x40b4ac = await _0x32effa['get'](_0x154714);
            if (_0x40b4ac['status'] !== 0xc8) {
                console['error']('Failed\x20to\x20fetch\x20products\x20from\x20' + _0x154714);
                return;
            }
            const _0x1c9d86 = _0x40b4ac['data']['products'];
            _0x5692e2 = _0x5692e2['concat'](_0x1c9d86);
            if (_0x1c9d86['length'] < _0x18029a) {
                _0x4dab08 = !![];
            }
        }));
        if (_0x4dab08) {
            break;
        }
    }
    return _0x5692e2;
};
const insertProductStatistics = (_0x46be82, _0x253e02, _0x3a94c1, _0x3bc38, _0x52062d) => {
    const {
        averageRating: _0x1c8bf9,
        reviewAmount: _0x51fe69
    } = _0x46be82;
    if (_0x253e02['querySelector']('.collection-star-section[data-product-id=\x22' + _0x3bc38 + '\x22]')) {
        return;
    }
    if (_0x52062d && !_0x51fe69)
        return;
    const _0x237205 = document['createElement']('div');
    _0x237205['classList']['add']('collection-star-section', 'bk-reviews', _0x3a94c1);
    _0x237205['setAttribute']('data-product-id', _0x3bc38);
    _0x237205['style']['textAlign'] = 'inherit';
    _0x253e02['style']['margin'] = '0';
    const _0x251a31 = _0x253e02['parentElement'];
    if (!_0x251a31)
        return;
    const _0x391251 = _0x253e02['nextElementSibling'];
    if (_0x391251) {
        _0x391251['style']['setProperty']('margin-top', '0');
        _0x251a31['insertBefore'](_0x237205, _0x391251);
    } else {
        _0x251a31['appendChild'](_0x237205);
    }
    _0xdce990['render'](_0x4b75d7['jsx'](CollectionStarSection, {
        'theme': _0x3a94c1,
        'averageRating': _0x1c8bf9,
        'reviewAmount': _0x51fe69
    }), _0x237205);
};
const getStoreProductsMap = async (_0x327245, _0x745d6b) => {
    const _0x2efc13 = new Map();
    _0x327245['forEach'](_0x3c773b => {
        _0x2efc13['set'](_0x3c773b['handle'], _0x3c773b['id']);
    });
    return _0x2efc13;
};
const insertProductsStatistics = async (_0x13d243, _0x280103, _0x53b976, _0x2f94a9, _0x4e449b) => {
    const _0x314b06 = new Map();
    _0x13d243['forEach'](_0x3205eb => {
        _0x314b06['set'](_0x3205eb['productId'], _0x3205eb);
    });
    await Promise['all'](_0x280103['map'](async _0x5ada59 => {
        var _0x2ef859, _0x368fea, _0x3f0301;
        const _0x545b06 = decodeURIComponent(_0x5ada59['getAttribute']('href') ?? '');
        const _0x4902df = (_0x368fea = (_0x2ef859 = _0x545b06['split']('/products/')) == null ? void 0x0 : _0x2ef859[0x1]) == null ? void 0x0 : _0x368fea['split']('?')[0x0];
        if (!_0x4902df)
            return;
        const _0x4ddbe3 = _0x53b976['get'](_0x4902df);
        const _0x2a5b4e = _0x4ddbe3 ? _0x314b06['get'](String(_0x4ddbe3)) : null;
        const _0x3757b9 = (_0x3f0301 = _0x5ada59['parentElement']) == null ? void 0x0 : _0x3f0301['querySelector']('.collection-star-section[data-product-id=\x22' + _0x4ddbe3 + '\x22]');
        if (_0x3757b9)
            return;
        if (_0x2a5b4e) {
            insertProductStatistics(_0x2a5b4e, _0x5ada59, _0x2f94a9, String(_0x4ddbe3), _0x4e449b);
            return await Promise['resolve']();
        }
    }));
    fixSliderOverflow();
};
const getProductCards = _0x9ed15a => {
    let _0x17fbb6 = [];
    const _0x1b230e = '.shopify-section[id*=\x22recently-viewed-products\x22]';
    const _0xafde8d = '.shopify-section[id*=\x22recommendations\x22]';
    const _0x4b8f9d = '.shopify-section[id*=\x22promotions\x22]';
    const _0x25b76d = [
        _0x1b230e,
        _0xafde8d,
        _0x4b8f9d
    ];
    const _0x50dec5 = [
        'a[href*=\x22/products/\x22][class*=\x22title\x22]',
        '[class*=\x22title\x22]\x20a[href*=\x22/products/\x22]',
        'a[href*=\x22/products/\x22][id*=\x22CardLink\x22]',
        'a[href*=\x22/products/\x22][class*=\x22product-link\x22]',
        'a[href*=\x22/products/\x22][class*=\x22link\x22]'
    ];
    let _0x7af9be = _0x50dec5;
    if (_0x9ed15a) {
        let _0x11b878;
        for (const _0x6624a6 of _0x50dec5) {
            const _0x5bdd27 = document['querySelector'](_0x6624a6);
            if (_0x5bdd27) {
                _0x11b878 = _0x6624a6;
                break;
            }
        }
        if (!_0x11b878)
            return [];
        _0x7af9be = _0x25b76d['map'](_0x3c0056 => _0x3c0056 + '\x20' + _0x11b878);
    }
    for (const _0x15a28b of _0x7af9be) {
        _0x17fbb6 = document['querySelectorAll'](_0x15a28b);
        if (_0x17fbb6['length']) {
            break;
        }
    }
    return Array['from'](_0x17fbb6)['filter'](_0x130a00 => _0x130a00 instanceof HTMLElement);
};
const getProductHandles = _0x2f49e9 => {
    const _0x2abd02 = new Set();
    _0x2f49e9['forEach'](_0xfb8123 => {
        var _0x1d5f72, _0xb088dc;
        const _0x191986 = decodeURIComponent(_0xfb8123['getAttribute']('href') ?? '');
        const _0x57232d = (_0xb088dc = (_0x1d5f72 = _0x191986['split']('/products/')) == null ? void 0x0 : _0x1d5f72[0x1]) == null ? void 0x0 : _0xb088dc['split']('?')[0x0];
        if (!_0x57232d)
            return;
        _0x2abd02['add'](_0x57232d);
    });
    return _0x2abd02;
};
const getFilteredProducts = (_0x1ec081, _0x5aae87) => {
    const _0x3ba38c = [];
    for (const _0x8707ab of _0x5aae87) {
        if (_0x1ec081['has'](_0x8707ab['handle'])) {
            _0x3ba38c['push'](_0x8707ab);
        }
    }
    return _0x3ba38c;
};
const getProductIds = _0x554716 => {
    return _0x554716['map'](_0x1c9443 => _0x1c9443['id'])['sort']((_0x2392e5, _0x4556c9) => Number(_0x4556c9) - Number(_0x2392e5));
};
const getProductsStatistics = (_0x58f9b6, _0x72a3df) => {
    const _0x22eb0b = new _0x529a91(_0x58f9b6[0x0], _0x72a3df, _0x71f80b);
    return _0x22eb0b['getCollectionStatistics'](_0x58f9b6);
};
const fixSliderOverflow = () => {
    const _0x13321d = [];
    const _0x36104a = [
        '.flickity-viewport:has(.collection-star-section)',
        '.product-list:has(.collection-star-section)'
    ];
    for (const _0x4f70fe of _0x36104a) {
        const _0xade78d = document['querySelectorAll'](_0x4f70fe);
        _0x13321d['push'](..._0xade78d);
    }
    if (!_0x13321d['length'])
        return;
    _0x13321d['forEach'](_0x115023 => {
        const _0x435fa7 = _0x115023['querySelector']('.flickity-slider\x20>\x20div');
        if (!_0x435fa7)
            return;
        const _0x117c56 = _0x435fa7['offsetHeight'];
        const _0x21436f = _0x115023['offsetHeight'];
        if (_0x117c56 > _0x21436f) {
            _0x115023['style']['height'] = _0x117c56 + 'px';
        }
    });
};
let allStoreProducts;
const statistics = new Map();
const getStatisticsAndMap = async (_0x3f8133, _0x5805b2) => {
    const _0x2fc70c = getProductHandles(_0x3f8133);
    if (!allStoreProducts) {
        allStoreProducts = await getStoreProducts(_0x5805b2);
    }
    const _0xbffa3a = getFilteredProducts(_0x2fc70c, allStoreProducts);
    const _0x2c0e37 = getProductIds(_0xbffa3a);
    const _0x16b254 = _0x2c0e37['toString']();
    const _0x2685ad = await getStoreProductsMap(_0xbffa3a);
    if (!statistics['get'](_0x16b254)) {
        statistics['set'](_0x16b254, await getProductsStatistics(_0x2c0e37, _0x5805b2));
    }
    return {
        'statistics': statistics['get'](_0x16b254),
        'productMap': _0x2685ad
    };
};
async function insertCollectionStarSection(_0x1b61f5, _0x44ea85, _0x1f3ee0, _0x4aacd9 = ![], _0x9d3f94 = !![]) {
    const _0x1af6f9 = getProductCards(_0x1b61f5);
    const {
        statistics: _0x5056d7,
        productMap: _0x43e265
    } = await getStatisticsAndMap(_0x1af6f9, _0x44ea85);
    if (_0x9d3f94 && _0x1f3ee0 && _0x5056d7 && _0x43e265) {
        insertProductsStatistics(_0x5056d7, _0x1af6f9, _0x43e265, _0x1f3ee0, _0x4aacd9);
    }
}
function observeDOM(_0x5affb3, _0x1124e7) {
    const _0x1cf118 = new MutationObserver(_0x1124e7);
    _0x1cf118['observe'](_0x5affb3, {
        'childList': !![],
        'subtree': !![]
    });
    return _0x1cf118;
}
const injectThemePreferencesStyle = _0x41d938 => {
    if (!_0x41d938)
        return;
    const _0x4bb46a = '.bk-reviews\x20>\x20*\x20{' + Object['entries'](_0x41d938)['filter'](([_0x10991c]) => _0x10991c['includes']('Color'))['map'](([_0x10fabf, _0x2fe938]) => _0x2fe938 && '--twc-' + _0x10fabf['split']('Color')[0x0] + ':\x20' + _0x3946fb(_0x2fe938)['slice'](0x4, -0x1)['replaceAll'](',', ''))['join'](';\x20') + ';}';
    n(_0x4bb46a);
};
function App() {
    const _0x3ab3af = _0x5038ba();
    const _0x5a0edc = _0x3150aa();
    const _0x328963 = _0x31e59f();
    const {reviewStatistics: _0xb32cb8} = _0x506efa['useContext'](_0x591048);
    const {
        theme: _0x484ea3,
        setTheme: _0xbb22bb,
        themePreferences: _0x15fd70,
        setThemePreferences: _0x3106b9
    } = _0x506efa['useContext'](_0x304b8b);
    _0x5344ac();
    injectThemePreferencesStyle(_0x15fd70);
    if (!_0x5a0edc)
        return null;
    const _0x1ec314 = !(_0xb32cb8 == null ? void 0x0 : _0xb32cb8['reviewAmount']) && (_0x15fd70 == null ? void 0x0 : _0x15fd70['starsWithoutReviews']) === ![];
    _0x506efa['useEffect'](() => {
        _0x3ab3af['getStorePreferences']()['then'](_0x1b77ec => {
            const {
                theme: _0xe9e84,
                theme_preferences: _0x3067be
            } = _0x1b77ec;
            _0xbb22bb(_0xe9e84);
            if (!_0x3067be || !_0x3106b9)
                return;
            _0x3106b9(_0x3067be);
            const _0xecdb77 = () => insertCollectionStarSection(Boolean(_0x328963), _0x5a0edc, _0xe9e84, (_0x3067be == null ? void 0x0 : _0x3067be['starsWithoutReviews']) === ![], (_0x3067be == null ? void 0x0 : _0x3067be['starsInBox']) !== ![]);
            _0xecdb77();
            setTimeout(() => observeDOM(window['document']['body'], _0xecdb77), 0x3e8);
        })['catch'](() => _0xbb22bb('default'));
    }, []);
    _0x506efa['useEffect'](() => {
        var _0x3c3eb5;
        if (_0x5a0edc && _0x328963 && _0x484ea3 && _0xb32cb8) {
            (_0x3c3eb5 = document['querySelector']('#bk-reviews-root')) == null ? void 0x0 : _0x3c3eb5['setAttribute']('data-theme', _0x484ea3);
            if (!_0x1ec314) {
                insertStarSection(_0x484ea3);
                insertReviewSection(_0x484ea3);
            }
        }
    }, [
        _0x484ea3,
        _0xb32cb8,
        _0x5a0edc,
        _0x328963,
        _0x1ec314
    ]);
    const _0x312c45 = ![];
    return _0x312c45 && _0x484ea3 !== void 0x0 ? _0x4b75d7['jsxs'](_0x4b75d7['Fragment'], {
        'children': [
            _0x4b75d7['jsx'](_0x2aa0cf, {
                'theme': _0x484ea3,
                'extension': 'star-section'
            }),
            _0x4b75d7['jsx'](_0x2aa0cf, {
                'theme': _0x484ea3,
                'extension': 'review-section'
            })
        ]
    }) : null;
}
_0x117cea['createRoot'](document['getElementById']('bk-reviews-root'))['render'](_0x4b75d7['jsx'](_0x2db6fc['StrictMode'], {
    'children': _0x4b75d7['jsx'](_0x4192cd, {
        'i18n': _0x4a29b6,
        'children': _0x4b75d7['jsx'](_0x23e7fe, { 'children': _0x4b75d7['jsx'](_0x47e56c, { 'children': _0x4b75d7['jsx'](_0x1f22bb, { 'children': _0x4b75d7['jsx'](App, {}) }) }) })
    })
}));