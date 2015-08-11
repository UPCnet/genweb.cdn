# -*- coding: utf-8 -*-
"""Setup/installation tests for this package."""

from genweb.cdn.testing import IntegrationTestCase
from plone import api


class TestInstall(IntegrationTestCase):
    """Test installation of genweb.cdn into Plone."""

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if genweb.cdn is installed with portal_quickinstaller."""
        self.assertTrue(self.installer.isProductInstalled('genweb.cdn'))

    def test_uninstall(self):
        """Test if genweb.cdn is cleanly uninstalled."""
        self.installer.uninstallProducts(['genweb.cdn'])
        self.assertFalse(self.installer.isProductInstalled('genweb.cdn'))

    # browserlayer.xml
    def test_browserlayer(self):
        """Test that IGenwebCdnLayer is registered."""
        from genweb.cdn.interfaces import IGenwebCdnLayer
        from plone.browserlayer import utils
        self.failUnless(IGenwebCdnLayer in utils.registered_layers())
